import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%235B21B6" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#FF6B6B] font-semibold text-lg mb-4 block">Smart Waste Management Reimagined</span>
          <h2 className="text-4xl font-bold mb-6 lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#5B21B6] to-[#FF6B6B]">
            Turn Your Recycling Into
            <br />
            an EcoTale Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join businesses making waste management their sustainability success story
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 relative">
          {/* V1 Card - Legacy Edition */}
          <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 opacity-80 transform hover:scale-[0.99] transition-all duration-300">
            <div className="absolute -top-3 -right-3 bg-[#FF6B6B] text-white px-6 py-2 rounded-full font-semibold transform -rotate-6 shadow-lg">
              Limited Stock
            </div>
            
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
                <span className="text-3xl font-bold text-gray-400">V1</span>
              </div>
              <div className="ml-6">
                <h3 className="text-3xl font-bold text-gray-400">EcoTail Essential</h3>
                <p className="text-gray-500 mt-1">Trusted by Industry Leaders</p>
              </div>
            </div>
            
            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-400">2.5k</span>
                  <span className="text-gray-400 ml-1">+</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">Happy Businesses</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="text-3xl font-bold text-gray-400">98%</div>
                <div className="text-sm text-gray-500 mt-1">Client Retention</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="text-3xl font-bold text-gray-400">85%</div>
                <div className="text-sm text-gray-500 mt-1">Cost Reduction</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="text-3xl font-bold text-gray-400">24/7</div>
                <div className="text-sm text-gray-500 mt-1">Expert Support</div>
              </div>
            </div>

            {/* Legacy Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Smart AI-Powered Sorting</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-Time Monitoring Hub</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cost-Saving Rewards System</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gray-100 transform skew-y-[-3deg] rounded-xl"></div>
              <button 
                disabled
                className="relative w-full py-4 bg-gray-300 text-white font-semibold rounded-xl cursor-not-allowed"
              >
                Upgrade to V2 Pro
              </button>
            </div>
          </div>

          {/* V2 Card - Next Generation */}
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#5B21B6] transform hover:scale-[1.02] transition-all duration-300">
            <div className="absolute -top-3 -right-3 bg-[#5B21B6] text-white px-6 py-2 rounded-full font-semibold transform rotate-6 shadow-lg">
              New Release
            </div>

            {/* Product Image with Overlay */}
            <div className="relative mb-10 rounded-2xl overflow-hidden group">
              <img 
                src="/images/v2-product.png" 
                alt="EcoTail Pro V2" 
                className="w-full h-56 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5B21B6]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Next generation smart waste management</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <div className="w-20 h-20 bg-[#5B21B6]/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#5B21B6]">V2</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-3xl font-bold text-[#5B21B6]">Smart Bin</h3>
                  <p className="text-[#FF6B6B] font-medium mt-1">Pre-order Available</p>
                </div>
              </div>
            </div>

            {/* Enhanced Features */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#5B21B6] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#5B21B6] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-[#5B21B6] transition-colors duration-300">Smart Sorting</div>
                  <div className="text-sm text-[#FF6B6B]">Automatic waste classification</div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#5B21B6] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#5B21B6] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-[#5B21B6] transition-colors duration-300">Real-time Data</div>
                  <div className="text-sm text-[#FF6B6B]">Monitor from anywhere</div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#5B21B6]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#5B21B6] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#5B21B6] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-[#5B21B6] transition-colors duration-300">Cost Efficient</div>
                  <div className="text-sm text-[#FF6B6B]">Reduce waste expenses</div>
                </div>
              </div>
            </div>

            {/* Pre-order Button */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#5B21B6]/20 transform skew-y-[-3deg] rounded-xl"></div>
              <button 
                onClick={() => navigate('/purchase/v2')}
                className="relative w-full py-4 bg-[#5B21B6] hover:bg-[#4C1D95] text-white font-semibold rounded-xl transition-colors flex items-center justify-center space-x-3 group"
              >
                <span>Pre-order Now</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 