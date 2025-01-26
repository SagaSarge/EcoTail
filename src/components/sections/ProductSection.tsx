import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../hooks/useAnalytics';

export const ProductSection: React.FC = () => {
  const navigate = useNavigate();
  const { trackPurchaseClick } = useAnalytics();

  const comparisonFeatures = [
    {
      feature: "Waste Sorting",
      v1: "Basic AI Sorting",
      v2: "Advanced Multi-Stream Sorting",
      icon: "🔄"
    },
    {
      feature: "Real-time Analytics",
      v1: "Basic Metrics",
      v2: "Advanced Insights & Predictions",
      icon: "📊"
    },
    {
      feature: "Mobile App",
      v1: "View Only",
      v2: "Full Control & Customization",
      icon: "📱"
    },
    {
      feature: "Sustainability Reports",
      v1: "Monthly Reports",
      v2: "Real-time Custom Reports",
      icon: "📈"
    },
    {
      feature: "Integration",
      v1: "Standard APIs",
      v2: "Advanced APIs & Custom Integration",
      icon: "🔌"
    }
  ];

  const handlePurchaseClick = () => {
    trackPurchaseClick('product_section', {
      button_type: 'buy_now',
      button_text: 'Buy Now',
      product: 'Smart Bin V1',
      price: 56,
      stock: 600
    });
    navigate('/purchase');
  };

  const handlePreorderClick = () => {
    trackPurchaseClick('product_section', {
      button_type: 'pre_order',
      button_text: 'Pre-order with $25 Deposit',
      product: 'Smart Bin V2',
      deposit: 25,
      total_price: 149,
      delivery_date: 'February 17th'
    });
    navigate('/purchase');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/5 blur-3xl opacity-70" 
        />
        <div 
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0F9D58]/10 to-[#0F9D58]/5 blur-3xl opacity-70" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#4285F4] font-semibold text-lg mb-4 block">
            Smart Waste Management Solutions
          </span>
          <h2 className="text-4xl font-bold mb-6 lg:text-5xl text-gray-900">
            Choose Your
            <span className="relative ml-2">
              <span className="absolute -inset-2 blur-2xl bg-[#4285F4]/20 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#4285F4]/80"> Solution </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our smart waste management solutions and find the perfect fit for your needs
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="mb-8 sm:mb-16 max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
          {/* Header */}
          <div className="grid grid-cols-3 p-3 sm:p-6 gap-2 sm:gap-4 border-b border-gray-100 bg-gray-50/50 rounded-t-xl sm:rounded-t-2xl">
            <div className="text-sm sm:text-base font-semibold text-gray-900">Features</div>
            <div className="text-sm sm:text-base font-semibold text-gray-900 text-center">V1</div>
            <div className="text-sm sm:text-base font-semibold text-[#4285F4] text-center">V2</div>
          </div>
          {/* Features List */}
          {comparisonFeatures.map((item, index) => (
            <div key={index} className="grid grid-cols-3 p-3 sm:p-6 gap-2 sm:gap-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors duration-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-2xl">{item.icon}</span>
                <span className="text-xs sm:text-base text-gray-900">{item.feature}</span>
              </div>
              <div className="text-xs sm:text-base text-gray-600 text-center flex items-center justify-center">{item.v1}</div>
              <div className="text-xs sm:text-base text-[#4285F4] font-medium text-center flex items-center justify-center">{item.v2}</div>
            </div>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* V1 Card */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group transition-all duration-300">
            {/* Stock Count Label */}
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-green-600 text-white">
                600 units left
              </span>
            </div>
            {/* Product Image */}
            <div className="relative h-64 bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-xl transform -rotate-12"></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Bin V1</h3>
              <div className="text-3xl font-bold text-[#4285F4] mb-4">$56</div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <div className="w-8 h-8 bg-[#4285F4]/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">🔍</span>
                  </div>
                  Basic AI Sorting
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-8 h-8 bg-[#F4B400]/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">📊</span>
                  </div>
                  Standard Analytics
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-8 h-8 bg-[#0F9D58]/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">📱</span>
                  </div>
                  Mobile App Access
                </div>
              </div>
              <button 
                onClick={handlePurchaseClick}
                className="w-full py-3 px-4 rounded-xl bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-colors duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* V2 Card */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            {/* Pre-order Label */}
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-[#4285F4] text-white">
                Pre-order Available
              </span>
            </div>
            {/* Product Image */}
            <div className="relative h-64 bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-xl transform rotate-12"></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Bin V2</h3>
              <div className="text-3xl font-bold text-[#4285F4] mb-2">$25</div>
              <div className="text-sm text-gray-600 mb-4">
                Fully refundable deposit. Total price: $149
              </div>
              <div className="text-sm text-[#4285F4] mb-4">
                Delivery starts February 17th
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <div className="w-8 h-8 bg-[#4285F4]/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">🔍</span>
                  </div>
                  Advanced AI Sorting
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-8 h-8 bg-[#F4B400]/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">📊</span>
                  </div>
                  Real-time Analytics
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-8 h-8 bg-[#0F9D58]/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">📱</span>
                  </div>
                  Full App Control
                </div>
              </div>
              <button 
                onClick={handlePreorderClick}
                className="w-full py-3 px-4 rounded-xl bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-colors duration-300"
              >
                Pre-order with $25 Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 