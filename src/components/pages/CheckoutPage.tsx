import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../hooks/useAnalytics';
import { motion } from 'framer-motion';

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
  type: 'traditional' | 'crypto';
  cryptoDetails?: {
    network: string;
    token: string;
  };
}

const paymentProviders: PaymentProvider[] = [
  {
    name: "Credit Card",
    logo: "💳",
    description: "Fast and secure payment with Stripe",
    buttonText: "Pay with Card",
    checkoutUrl: "https://checkout.stripe.com",
    type: 'traditional'
  },
  {
    name: "PayPal",
    logo: "🔒",
    description: "Pay with your PayPal account",
    buttonText: "PayPal Checkout",
    checkoutUrl: "https://paypal.com/checkout",
    type: 'traditional'
  },
  {
    name: "Bitcoin",
    logo: "₿",
    description: "Pay with BTC on Bitcoin Network",
    buttonText: "Pay with Bitcoin",
    checkoutUrl: "https://crypto.checkout.com",
    type: 'crypto',
    cryptoDetails: {
      network: 'Bitcoin',
      token: 'BTC'
    }
  },
  {
    name: "Ethereum",
    logo: "Ξ",
    description: "Pay with ETH on Ethereum Network",
    buttonText: "Pay with ETH",
    checkoutUrl: "https://crypto.checkout.com",
    type: 'crypto',
    cryptoDetails: {
      network: 'Ethereum',
      token: 'ETH'
    }
  },
  {
    name: "USDC",
    logo: "₮",
    description: "Pay with USDC on multiple networks",
    buttonText: "Pay with USDC",
    checkoutUrl: "https://crypto.checkout.com",
    type: 'crypto',
    cryptoDetails: {
      network: 'Multi-chain',
      token: 'USDC'
    }
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
        price: state.price,
        paymentType: provider.type
      }
    });

    // TODO: Replace with actual payment provider integration
    window.location.href = `${provider.checkoutUrl}?amount=${state.price}&product=${state.productType}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] to-[#1A1F2C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              Secure Checkout
            </h1>
            <p className="text-gray-400">
              Choose your preferred payment method to complete your {state.isPreOrder ? 'pre-order' : 'purchase'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#1E2330] rounded-2xl shadow-xl border border-gray-800 p-6 backdrop-blur-xl">
                <h2 className="text-xl font-semibold text-blue-400 mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Product</span>
                    <span className="font-medium">Smart Bin {state.productType.toUpperCase()}</span>
                  </div>
                  {state.isPreOrder ? (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Deposit Amount</span>
                        <span className="font-medium text-green-400">{state.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Price</span>
                        <span className="font-medium text-blue-400">{state.totalPrice}</span>
                      </div>
                      <div className="mt-4 p-3 bg-blue-900/20 rounded-lg">
                        <p className="text-sm text-blue-400">
                          * Only the deposit amount will be charged today
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total</span>
                      <span className="font-medium text-green-400">{state.price}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="lg:col-span-2">
              <div className="grid gap-4">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">Traditional Payment</h2>
                {paymentProviders.filter(p => p.type === 'traditional').map((provider) => (
                  <PaymentOption key={provider.name} provider={provider} onSelect={handlePaymentSelect} />
                ))}

                <h2 className="text-xl font-semibold text-blue-400 mt-8 mb-2">Cryptocurrency</h2>
                {paymentProviders.filter(p => p.type === 'crypto').map((provider) => (
                  <PaymentOption key={provider.name} provider={provider} onSelect={handlePaymentSelect} />
                ))}
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/purchase')}
            className="mt-12 w-full text-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            ← Return to purchase page
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

const PaymentOption: React.FC<{
  provider: PaymentProvider;
  onSelect: (provider: PaymentProvider) => void;
}> = ({ provider, onSelect }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(provider)}
      className="relative bg-[#1E2330] rounded-xl border border-gray-800 p-6 text-left hover:bg-[#252A3A] transition-all duration-300 group backdrop-blur-xl"
    >
      <div className="flex items-center">
        <span className="text-2xl mr-4">{provider.logo}</span>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
            {provider.name}
          </h3>
          <p className="text-gray-400 text-sm">{provider.description}</p>
          {provider.cryptoDetails && (
            <div className="mt-2 flex items-center space-x-2">
              <span className="px-2 py-1 bg-blue-900/20 rounded text-xs text-blue-400">
                {provider.cryptoDetails.network}
              </span>
              <span className="px-2 py-1 bg-purple-900/20 rounded text-xs text-purple-400">
                {provider.cryptoDetails.token}
              </span>
            </div>
          )}
        </div>
        <div className="ml-auto">
          <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
            {provider.buttonText}
          </span>
        </div>
      </div>
    </motion.button>
  );
};

export default CheckoutPage; 