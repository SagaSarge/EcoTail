import React, { useEffect, useState } from 'react';
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
  method: 'card' | 'paypal';
}

const paymentProviders: PaymentProvider[] = [
  {
    name: "Credit Card",
    logo: "💳",
    description: "Pay securely with your credit or debit card",
    buttonText: "Pay with Card",
    method: 'card'
  },
  {
    name: "PayPal",
    logo: "🔒",
    description: "Pay with your PayPal account",
    buttonText: "PayPal Checkout",
    method: 'paypal'
  }
];

export const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trackEvent } = useAnalytics();
  const state = location.state as LocationState;
  const [showCardForm, setShowCardForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

    if (provider.method === 'card') {
      setShowCardForm(true);
    } else if (provider.method === 'paypal') {
      // TODO: Implement PayPal integration
      window.location.href = 'https://paypal.com/checkout';
    }
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement card payment processing
    console.log('Processing card payment...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] to-[#1A1F2C] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
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

          {/* Order Summary */}
          <div className="bg-[#1E2330] rounded-2xl shadow-xl border border-gray-800 p-6 backdrop-blur-xl mb-8">
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

          {/* Payment Options or Card Form */}
          {!showCardForm ? (
            <div className="space-y-4">
              {paymentProviders.map((provider) => (
                <motion.button
                  key={provider.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePaymentSelect(provider)}
                  className="w-full relative bg-[#1E2330] rounded-xl border border-gray-800 p-6 text-left hover:bg-[#252A3A] transition-all duration-300 group backdrop-blur-xl"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{provider.logo}</span>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {provider.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{provider.description}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                        {provider.buttonText}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <form onSubmit={handleCardSubmit} className="space-y-6 bg-[#1E2330] rounded-2xl shadow-xl border border-gray-800 p-6 backdrop-blur-xl">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-400 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full px-4 py-2 bg-[#252A3A] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-400 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    className="w-full px-4 py-2 bg-[#252A3A] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-400 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    className="w-full px-4 py-2 bg-[#252A3A] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#252A3A] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  Complete Purchase
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setShowCardForm(false)}
                  className="px-4 py-2 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300"
                >
                  Back
                </motion.button>
              </div>
            </form>
          )}

          {!showCardForm && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/purchase')}
              className="mt-8 w-full text-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              ← Return to purchase page
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage; 