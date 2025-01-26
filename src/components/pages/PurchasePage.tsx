import React, { useState, useEffect } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useNavigate } from 'react-router-dom';

interface PricingTier {
  name: string;
  price: string;
  totalPrice?: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isSoldOut?: boolean;
  stockCount?: number;
  deliveryDate?: string;
  depositInfo?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Smart Bin V1",
    price: "$56",
    description: "Basic smart waste management solution - Only 600 units left",
    features: [
      "Basic AI Sorting",
      "View Only Mobile App",
      "Basic Metrics",
      "Monthly Reports",
      "Standard APIs",
      "Email Support"
    ],
    buttonText: "Buy Now",
    stockCount: 600
  },
  {
    name: "Smart Bin V2",
    price: "$25",
    totalPrice: "$149",
    description: "Secure your order with a fully refundable deposit",
    features: [
      "Advanced Multi-Stream Sorting",
      "Full Control & Customization App",
      "Advanced Insights & Predictions",
      "Real-time Custom Reports",
      "Advanced APIs & Custom Integration",
      "Priority Support 24/7",
      "Employee Training Session",
      "Extended Warranty"
    ],
    buttonText: "Pre-order with $25 Deposit",
    isPopular: true,
    deliveryDate: "February 17th",
    depositInfo: "Fully refundable deposit. Total price: $149"
  },
  {
    name: "Smart Bin V2 Enterprise",
    price: "Contact Sales",
    description: "Custom enterprise solutions with volume discounts",
    features: [
      "Custom AI Model Training",
      "White-label Mobile App",
      "Enterprise Analytics Suite",
      "Custom Integration Support",
      "Dedicated Support Team",
      "Volume Discounts Available",
      "On-site Training & Setup",
      "Extended Enterprise Warranty"
    ],
    buttonText: "Contact Sales"
  }
];

export const PurchasePage: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleTierSelect = (tier: PricingTier) => {
    setSelectedTier(tier.name);
    
    trackEvent({
      action: 'select_pricing_tier',
      category: 'purchase',
      label: tier.name,
      additionalData: {
        price: tier.price,
        isPreOrder: tier.name.includes('V2') && !tier.name.includes('Enterprise')
      }
    });

    if (tier.name.includes('Enterprise')) {
      navigate('/enterprise-contact');
    } else {
      // Navigate to checkout with appropriate state
      navigate('/checkout', {
        state: {
          productType: tier.name.includes('V2') ? 'v2' : 'v1',
          price: tier.price,
          totalPrice: tier.totalPrice,
          isPreOrder: tier.name.includes('V2') && !tier.name.includes('Enterprise')
        }
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent({
      action: 'submit_purchase_form',
      category: 'purchase',
      label: selectedTier || 'no_tier_selected',
      additionalData: {
        page: 'purchase_page',
        formData: {
          ...formData,
          email: 'REDACTED' // Don't track email in analytics
        }
      }
    });
    // TODO: Implement form submission logic
    console.log('Form submitted:', { selectedTier, formData });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#4285F4] font-semibold text-lg mb-4 block">
            Smart Waste Management Solutions
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your
            <span className="relative ml-2">
              <span className="absolute -inset-2 blur-2xl bg-[#4285F4]/20 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#4285F4]/80"> Solution </span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare our smart waste management solutions and find the perfect fit for your needs
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-xl border ${
                tier.isPopular ? 'border-[#4285F4] scale-105' : 'border-gray-100'
              } p-8 transition-all duration-300 hover:shadow-2xl`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 right-4 z-20">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-[#4285F4] text-white">
                    Pre-order Available
                  </span>
                </div>
              )}
              {tier.stockCount && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-green-600 text-white">
                    {tier.stockCount} units left
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold mb-2 text-[#4285F4]">
                  {tier.price}
                </div>
                {tier.depositInfo && (
                  <div className="text-sm text-gray-600 mb-2">
                    {tier.depositInfo}
                  </div>
                )}
                <p className="text-gray-600">{tier.description}</p>
                {tier.deliveryDate && (
                  <p className="text-sm text-[#4285F4] mt-2 font-medium">
                    Delivery starts {tier.deliveryDate}
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <div className={`w-8 h-8 ${tier.isSoldOut ? 'bg-gray-100' : 'bg-[#4285F4]/10'} rounded-lg flex items-center justify-center mr-3`}>
                      <span className="text-xl">
                        {index === 0 ? '🔍' : 
                         index === 1 ? '📱' : 
                         index === 2 ? '📊' : '✨'}
                      </span>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleTierSelect(tier)}
                className={`w-full py-3 px-4 rounded-xl ${
                  tier.name.includes('Enterprise')
                    ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    : 'bg-[#4285F4] text-white hover:bg-[#3367D6]'
                } font-medium transition-colors duration-300`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        {selectedTier && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Pre-order</h2>
            <form 
              name="purchase-preorder"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="purchase-preorder" />
              
              {/* Bot field honeypot */}
              <div hidden>
                <input name="bot-field" />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4285F4] focus:border-[#4285F4]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-colors duration-300"
              >
                Submit Pre-order
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchasePage; 