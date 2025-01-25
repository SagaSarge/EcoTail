import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../hooks/useAnalytics';

interface CheckoutState {
  productType: 'v1' | 'v2';
  price: string;
  totalPrice?: string;
  isPreOrder: boolean;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  duration: string;
}

interface RecyclingProgress {
  item: string;
  current: number;
  target: number;
  reward: string;
  brand: string;
}

const shippingOptions: ShippingOption[] = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    price: 0,
    duration: '5-7 business days'
  },
  {
    id: 'express',
    name: 'Express Shipping',
    price: 15,
    duration: '2-3 business days'
  }
];

const recyclingNotifications = [
  {
    type: 'discount',
    item: "water bottles",
    current: 18,
    target: 24,
    reward: "$2.00 off",
    brand: "Brita Filter Pack",
    description: "Keep up the great work! You're close to earning a discount on filters."
  },
  {
    type: 'alert',
    location: "Kids Playroom Bin",
    item: "LEGO Pieces",
    count: 12,
    timeFound: "Last 24 hours",
    importance: "high",
    description: "Several LEGO pieces detected. Consider retrieving them for the building set."
  },
  {
    type: 'impact',
    location: "Kitchen Bin",
    stats: {
      total: 847,
      monthly: [156, 203, 245, 243],
      savings: "42.35"
    },
    description: "Your kitchen bin has helped recycle 847 water bottles in the last 4 months!"
  }
];

export const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trackEvent } = useAnalytics();
  const checkoutState = location.state as CheckoutState;

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [selectedShipping, setSelectedShipping] = useState<string>('standard');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  // Calculate total
  const calculateTotal = () => {
    const basePrice = parseFloat(checkoutState.price.replace('$', ''));
    const shippingCost = shippingOptions.find(opt => opt.id === selectedShipping)?.price || 0;
    return (basePrice + shippingCost).toFixed(2);
  };

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Redirect if no checkout state is present
    if (!location.state) {
      navigate('/purchase', { replace: true });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    // Scroll to top when step changes
    window.scrollTo(0, 0);
  }, [step]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContinueToPayment = () => {
    trackEvent({
      action: 'proceed_to_payment',
      category: 'checkout',
      label: checkoutState.productType,
      additionalData: {
        isPreOrder: checkoutState.isPreOrder,
        shippingOption: selectedShipping
      }
    });
    setStep('payment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Notifications positioned on the right */}
      <div className="fixed right-4 top-24 space-y-4 z-50 w-80">
        {/* Discount Notification */}
        <div
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-4 transform transition-all duration-500 hover:scale-105"
          style={{
            animation: `slideIn 0.5s ease-out 1s both`
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-emerald-500 mr-2">🌱</span>
              <span className="font-medium text-emerald-800">Eco Rewards</span>
            </div>
            <span className="text-sm font-semibold px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full">
              {recyclingNotifications[0].reward}
            </span>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between text-sm text-emerald-700 mb-1">
              <span>{recyclingNotifications[0].current} of {recyclingNotifications[0].target} {recyclingNotifications[0].item}</span>
              <span>{Math.round((recyclingNotifications[0].current / recyclingNotifications[0].target) * 100)}%</span>
            </div>
            <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                style={{ 
                  width: `${(recyclingNotifications[0].current / recyclingNotifications[0].target) * 100}%`,
                  animation: 'progressPulse 2s infinite'
                }}
              />
            </div>
          </div>
          
          <p className="text-sm text-emerald-600">
            {recyclingNotifications[0].description}
          </p>
        </div>

        {/* Alert Notification */}
        <div
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-4 transform transition-all duration-500 hover:scale-105"
          style={{
            animation: `slideIn 0.5s ease-out 2.5s both`
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-amber-500 mr-2">🧸</span>
              <span className="font-medium text-amber-800">Playroom Alert</span>
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-600 rounded-full">
              {recyclingNotifications[1].timeFound}
            </span>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <div className="font-medium text-amber-800">{recyclingNotifications[1].location}</div>
              <div className="text-sm text-amber-600">{recyclingNotifications[1].count} {recyclingNotifications[1].item}</div>
            </div>
          </div>
          
          <p className="text-sm text-amber-600">
            {recyclingNotifications[1].description}
          </p>
        </div>

        {/* Impact Stats Notification */}
        <div
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-4 transform transition-all duration-500 hover:scale-105"
          style={{
            animation: `slideIn 0.5s ease-out 4s both`
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">📊</span>
              <span className="font-medium text-blue-800">Recycling Impact</span>
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
              Last 4 Months
            </span>
          </div>
          
          <div className="mb-3">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {recyclingNotifications[2].stats.total}
            </div>
            <div className="text-sm text-blue-600">Water Bottles Recycled</div>
          </div>

          <div className="grid grid-cols-4 gap-1 mb-3">
            {recyclingNotifications[2].stats.monthly.map((count, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full bg-blue-100 rounded-t-lg overflow-hidden">
                  <div
                    className="bg-blue-400 w-full"
                    style={{
                      height: `${(count / Math.max(...recyclingNotifications[2].stats.monthly)) * 40}px`,
                      transition: 'height 1s ease-out'
                    }}
                  />
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  {['Jan', 'Feb', 'Mar', 'Apr'][index]}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-blue-600">
            You've helped save ${recyclingNotifications[2].stats.savings} in recycling costs!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header with Progress */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {checkoutState.isPreOrder ? 'Complete Your Pre-order' : 'Complete Your Purchase'}
            </h1>
            <p className="text-gray-600">
              {checkoutState.isPreOrder 
                ? 'Secure your Smart Bin V2 with a fully refundable deposit'
                : 'Complete your Smart Bin V1 purchase'}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
            <div className="relative flex justify-between">
              {['Details', 'Payment', 'Confirmation'].map((stepName, index) => (
                <div 
                  key={stepName}
                  className={`flex flex-col items-center ${
                    index === ['details', 'payment', 'confirmation'].indexOf(step) 
                      ? 'text-[#4285F4]' 
                      : 'text-gray-400'
                  }`}
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === ['details', 'payment', 'confirmation'].indexOf(step)
                        ? 'bg-[#4285F4] text-white'
                        : 'bg-gray-200'
                    } mb-2 relative z-10`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium">{stepName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column - Forms */}
          <div className="flex-grow space-y-6 max-w-3xl">
            {step === 'details' && (
              <>
                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center mr-3 text-sm">1</span>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center mr-3 text-sm">2</span>
                    Shipping Address
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4] transition-colors"
                          required
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Options */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center mr-3 text-sm">3</span>
                    Shipping Method
                  </h2>
                  <div className="space-y-4">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          selectedShipping === option.id
                            ? 'border-[#4285F4] bg-[#4285F4]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            value={option.id}
                            checked={selectedShipping === option.id}
                            onChange={(e) => setSelectedShipping(e.target.value)}
                            className="hidden"
                          />
                          <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                            selectedShipping === option.id
                              ? 'border-[#4285F4] bg-[#4285F4]'
                              : 'border-gray-300'
                          }`}>
                            {selectedShipping === option.id && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{option.name}</div>
                            <div className="text-sm text-gray-500">{option.duration}</div>
                          </div>
                        </div>
                        <div className="font-medium text-[#4285F4]">
                          {option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleContinueToPayment}
                  className="w-full py-4 px-6 rounded-xl bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-colors duration-300 shadow-lg shadow-[#4285F4]/20"
                >
                  Continue to Payment
                </button>
              </>
            )}

            {step === 'payment' && (
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                {/* Payment form will be integrated here */}
                <p className="text-gray-600">Payment integration coming soon...</p>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-[380px] flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Product</span>
                  <span className="font-medium">Smart Bin {checkoutState.productType.toUpperCase()}</span>
                </div>
                
                {checkoutState.isPreOrder ? (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Deposit Amount</span>
                      <span className="font-medium">{checkoutState.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Total Price (due at delivery)</span>
                      <span>{checkoutState.totalPrice}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price</span>
                    <span className="font-medium">{checkoutState.price}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingOptions.find(opt => opt.id === selectedShipping)?.price === 0 
                      ? 'Free' 
                      : `$${shippingOptions.find(opt => opt.id === selectedShipping)?.price.toFixed(2)}`}
                  </span>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total Due Now</span>
                    <span className="font-semibold text-lg text-[#4285F4]">${calculateTotal()}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
                  <div className="font-medium mb-1">Estimated Delivery:</div>
                  <div>{shippingOptions.find(opt => opt.id === selectedShipping)?.duration}</div>
                </div>
              </div>

              {checkoutState.isPreOrder && (
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <h3 className="font-medium text-[#4285F4] mb-2">Pre-order Information</h3>
                  <p className="text-sm text-gray-600">
                    Delivery starts February 17th. Your $25 deposit is fully refundable at any time before shipping.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes progressPulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}; 