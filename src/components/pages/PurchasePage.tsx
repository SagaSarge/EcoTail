import React, { useState } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Smart Bin V2 - Standard",
    price: "$999",
    description: "Perfect for small businesses and residential use",
    features: [
      "Basic AI Sorting Technology",
      "Mobile App Access",
      "Real-time Analytics Dashboard",
      "1-Year Hardware Warranty",
      "Email Support",
      "Monthly Performance Reports"
    ],
    buttonText: "Pre-order Standard"
  },
  {
    name: "Smart Bin V2 - Professional",
    price: "$1,499",
    description: "Ideal for medium businesses and organizations",
    features: [
      "Advanced Multi-Stream Sorting",
      "Full Mobile App Control",
      "Advanced Analytics & Predictions",
      "2-Year Extended Warranty",
      "Priority Support 24/7",
      "Weekly Performance Reports",
      "Custom Integration Support",
      "Employee Training Session"
    ],
    buttonText: "Pre-order Professional",
    isPopular: true
  },
  {
    name: "Smart Bin V2 - Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Custom AI Model Training",
      "White-label Mobile App",
      "Enterprise Analytics Suite",
      "5-Year Premium Warranty",
      "Dedicated Support Team",
      "Daily Performance Reports",
      "Full API Access",
      "On-site Training & Setup",
      "Volume Discounts"
    ],
    buttonText: "Contact Sales"
  }
];

export const PurchasePage: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleTierSelect = (tierName: string) => {
    setSelectedTier(tierName);
    trackEvent({
      action: 'select_pricing_tier',
      category: 'purchase',
      label: tierName,
      additionalData: {
        page: 'purchase_page',
        section: 'pricing_selection'
      }
    });
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Smart Bin Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect package for your waste management needs
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-xl border ${
                tier.isPopular ? 'border-primary-500 scale-105' : 'border-gray-100'
              } p-8 transition-all duration-300 hover:shadow-2xl`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">{tier.price}</div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleTierSelect(tier.name)}
                className={`w-full py-3 px-4 rounded-xl ${
                  selectedTier === tier.name
                    ? 'bg-primary-600 text-white'
                    : 'bg-primary-100 text-primary-600'
                } font-medium hover:bg-primary-600 hover:text-white transition-colors duration-300`}
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors duration-300"
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