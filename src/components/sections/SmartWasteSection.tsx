import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SmartWasteSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="relative z-10">
            <div className="text-sm font-semibold text-[#4285F4] uppercase tracking-wide mb-4">
              Smart Technology
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 lg:text-5xl">
              AI-Powered Waste
              <span className="block text-[#4285F4]">Management</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our intelligent bins do more than just collect waste. They actively analyze, categorize, and provide real-time insights into your disposal habits.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4285F4]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4285F4] mb-2">Real-Time Analysis</h3>
                  <p className="text-gray-600">Advanced sensors analyze waste composition instantly, providing immediate feedback and categorization.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F4B400]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F4B400] mb-2">Smart Insights</h3>
                  <p className="text-gray-600">Get detailed breakdowns of your waste patterns and personalized recommendations for improvement.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F9D58]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0F9D58] mb-2">Automated Tracking</h3>
                  <p className="text-gray-600">Set sustainability goals and track your progress automatically with our smart monitoring system.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button 
                onClick={() => navigate('/technology')}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#4285F4] hover:bg-[#3367D6] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Learn About Our Technology
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative mt-12 lg:mt-0">
            {/* Background Decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-[#4285F4]/10 rounded-full opacity-20 blur-3xl transform -rotate-12" />
            </div>

            {/* Main Visual */}
            <div className="relative">
              {/* Smart Bin Mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-2xl overflow-hidden">
                  {/* Replace with actual smart bin visualization */}
                  <div className="p-6 flex flex-col items-center justify-center text-gray-500">
                    <div className="w-full h-64 bg-gray-200 rounded-xl mb-4 relative">
                      {/* Bin Design */}
                      <div className="absolute inset-x-8 top-4 bottom-4 bg-[#4285F4]/10 rounded-lg">
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-[#4285F4]/20 rounded-full" />
                        {/* Animated Scanner Effect */}
                        <div className="absolute inset-x-0 h-1 bg-[#4285F4] rounded-full animate-scan" 
                             style={{animation: 'scan 2s linear infinite'}} />
                      </div>
                    </div>
                    <div className="w-full space-y-2">
                      <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto" />
                      <div className="h-4 bg-gray-200 rounded-full w-1/2 mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Live Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#4285F4]">98%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F4B400]">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0F9D58]">0.5s</div>
                    <div className="text-sm text-gray-600">Response</div>
                  </div>
                </div>
              </div>

              {/* Floating Alert */}
              <div className="absolute -right-8 -bottom-12 transform rotate-12">
                <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-[#DB4437]/20">
                  <div className="text-sm font-semibold text-[#DB4437]">Real-time Alert</div>
                  <div className="text-xs text-gray-600">Item categorized: Recyclable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 