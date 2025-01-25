import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../hooks/useAnalytics';

interface LocationState {
  productType: 'v1' | 'v2';
  price: string;
  totalPrice?: string;
  isPreOrder: boolean;
}

interface PaymentProvider {
  name: string;
  logo: string;
  description: string;
  buttonText: string;
  checkoutUrl: string;
}

const paymentProviders: PaymentProvider[] = [
  {
    name: "Stripe",
    logo: "💳",
    description: "Fast and secure credit card payment",
    buttonText: "Pay with Stripe",
    checkoutUrl: "https://checkout.stripe.com"
  },
  {
    name: "PayPal",
    logo: "🔒",
    description: "Pay with your PayPal account",
    buttonText: "Pay with PayPal",
    checkoutUrl: "https://paypal.com/checkout"
  },
  {
    name: "Shop Pay",
    logo: "🛍️",
    description: "Quick checkout with Shop Pay",
    buttonText: "Pay with Shop Pay",
    checkoutUrl: "https://shop.app/checkout"
  }
];

export const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trackEvent } = useAnalytics();
  const state = location.state as LocationState;

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Track page view
    trackEvent({
      action: 'view_checkout',
      category: 'checkout',
      label: state?.productType || 'unknown',
      additionalData: {
        isPreOrder: state?.isPreOrder,
        price: state?.price,
        totalPrice: state?.totalPrice
      }
    });
  }, []);

  if (!state) {
    navigate('/purchase');
    return null;
  }

  const handlePaymentSelect = (provider: PaymentProvider) => {
    trackEvent({
      action: 'select_payment_provider',
      category: 'checkout',
      label: provider.name,
      additionalData: {
        productType: state.productType,
        isPreOrder: state.isPreOrder,
        price: state.price
      }
    });

    // TODO: Replace with actual payment provider integration
    window.location.href = `${provider.checkoutUrl}?amount=${state.price}&product=${state.productType}`;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Secure Checkout
          </h1>
          <p className="text-gray-600">
            Choose your preferred payment method to complete your {state.isPreOrder ? 'pre-order' : 'purchase'}
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Product</span>
            <span className="font-medium">Smart Bin {state.productType.toUpperCase()}</span>
          </div>
          {state.isPreOrder ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Deposit Amount</span>
                <span className="font-medium">{state.price}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total Price</span>
                <span className="font-medium">{state.totalPrice}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                * Only the deposit amount will be charged today
              </p>
            </>
          ) : (
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Total</span>
              <span className="font-medium">{state.price}</span>
            </div>
          )}
        </div>

        {/* Payment Options */}
        <div className="grid gap-4">
          {paymentProviders.map((provider) => (
            <button
              key={provider.name}
              onClick={() => handlePaymentSelect(provider)}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-left hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-4">{provider.logo}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                  <p className="text-gray-600 text-sm">{provider.description}</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-4 py-2 rounded-lg bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-colors duration-300">
                    {provider.buttonText}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate('/purchase')}
          className="mt-8 w-full text-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          ← Return to purchase page
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage; 