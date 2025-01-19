import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductSection: React.FC = () => {
  const navigate = useNavigate();

  const comparisonFeatures = [
    {
      feature: "Waste Sorting",
      v1: "Basic AI Sorting",
      v2: "Advanced Multi-Stream Sorting"
    },
    {
      feature: "Real-time Analytics",
      v1: "Basic Metrics",
      v2: "Advanced Insights & Predictions"
    },
    {
      feature: "Mobile App",
      v1: "View Only",
      v2: "Full Control & Customization"
    },
    {
      feature: "Sustainability Reports",
      v1: "Monthly Reports",
      v2: "Real-time Custom Reports"
    },
    {
      feature: "Integration",
      v1: "Standard APIs",
      v2: "Advanced APIs & Custom Integration"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234285F4" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#4285F4] font-semibold text-lg mb-4 block">Smart Waste Management Solutions</span>
          <h2 className="text-4xl font-bold mb-6 lg:text-6xl text-gray-900">
            Choose Your Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare our smart waste management solutions and find the perfect fit for your needs
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="mb-20 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="grid grid-cols-3 p-6 gap-4 border-b border-gray-200 bg-gray-50 rounded-t-2xl">
            <div className="font-semibold text-gray-900">Features</div>
            <div className="font-semibold text-gray-900 text-center">V1</div>
            <div className="font-semibold text-gray-900 text-center">V2</div>
          </div>
          {comparisonFeatures.map((item, index) => (
            <div key={index} className="grid grid-cols-3 p-6 gap-4 border-b border-gray-200 last:border-0">
              <div className="text-gray-900">{item.feature}</div>
              <div className="text-gray-600 text-center">{item.v1}</div>
              <div className="text-[#4285F4] font-medium text-center">{item.v2}</div>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* V1 Card */}
          <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group">
            {/* Sold Out Label */}
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-gray-900/90 text-white">
                Sold Out
              </span>
            </div>
            {/* Product Image */}
            <div className="relative h-64 bg-[#4285F4] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-xl transform -rotate-12"></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Bin V1</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic AI Sorting
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Standard Analytics
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mobile App Access
                </div>
              </div>
              <button 
                disabled
                className="w-full py-3 px-4 rounded-xl bg-gray-200 text-gray-500 font-medium cursor-not-allowed"
              >
                Sold Out
              </button>
            </div>
          </div>

          {/* V2 Card */}
          <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            {/* Pre-order Label */}
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-[#4285F4] text-white">
                Pre-order Available
              </span>
            </div>
            {/* Product Image */}
            <div className="relative h-64 bg-[#4285F4] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-xl transform rotate-12"></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Bin V2</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced AI Sorting
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time Analytics
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full App Control
                </div>
              </div>
              <button 
                onClick={() => navigate('/purchase')}
                className="w-full py-3 px-4 rounded-xl bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-colors duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 