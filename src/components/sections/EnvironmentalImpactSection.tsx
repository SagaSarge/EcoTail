import React from 'react';

export const EnvironmentalImpactSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/5 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0F9D58]/10 to-[#0F9D58]/5 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#4285F4] font-semibold tracking-wide uppercase">YOUR HOUSEHOLD IMPACT</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Make Your Home's
            <span className="relative mx-2">
              <span className="absolute -inset-2 blur-2xl bg-[#4285F4]/20 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#4285F4]/80">Environmental</span>
            </span>
            Impact Count
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            The average American household generates 4.4 pounds of waste per person daily. See how much you could save with smart recycling.
          </p>
        </div>

        {/* Impact metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carbon Reduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#4285F4]/10 rounded-xl">
                <svg className="w-6 h-6 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Carbon Footprint</h3>
            </div>
            <p className="text-gray-600">Average household produces 48,000 pounds of CO2 yearly from waste alone</p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-[#4285F4]">-45%</div>
              <div className="text-sm text-gray-500">Potential reduction with smart recycling</div>
            </div>
          </div>

          {/* Recycling Rate */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#0F9D58]/10 rounded-xl">
                <svg className="w-6 h-6 text-[#0F9D58]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Recycling Impact</h3>
            </div>
            <p className="text-gray-600">Only 32% of household waste is currently recycled in America</p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-[#0F9D58]">+75%</div>
              <div className="text-sm text-gray-500">Achievable recycling rate with EcoTale</div>
            </div>
          </div>

          {/* Waste Reduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#F4B400]/10 rounded-xl">
                <svg className="w-6 h-6 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Annual Savings</h3>
            </div>
            <p className="text-gray-600">Average family spends $1,500/year on disposable items</p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-[#F4B400]">$450</div>
              <div className="text-sm text-gray-500">Potential yearly savings per household</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 