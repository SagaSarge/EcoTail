import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EnvironmentalImpactSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Globe SVG Background */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#4285F4]">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {/* Grid lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M10 ${20 + i * 10} Q50 ${10 + i * 10} 90 ${20 + i * 10}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
              />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M${20 + i * 10} 10 Q${10 + i * 10} 50 ${20 + i * 10} 90`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
              />
            ))}
          </svg>
        </div>

        {/* Tree SVG Elements */}
        <div className="absolute left-0 bottom-0 w-[400px] h-[300px] opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#0F9D58]">
            {/* Multiple Trees */}
            <g transform="translate(10,60) scale(0.8)">
              <path d="M20 60 L30 20 L40 60 Z" fill="currentColor" />
              <rect x="28" y="60" width="4" height="10" fill="currentColor" />
            </g>
            <g transform="translate(40,50) scale(0.6)">
              <path d="M20 60 L30 20 L40 60 Z" fill="currentColor" />
              <rect x="28" y="60" width="4" height="10" fill="currentColor" />
            </g>
            <g transform="translate(60,65) scale(0.7)">
              <path d="M20 60 L30 20 L40 60 Z" fill="currentColor" />
              <rect x="28" y="60" width="4" height="10" fill="currentColor" />
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 lg:text-5xl">
            Boost Your
            <span className="bg-gradient-to-r from-[#4285F4] via-[#F4B400] to-[#0F9D58] bg-clip-text text-transparent"> Bottom Line</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn waste management into a profit center with real-time tracking and optimization
          </p>
        </div>

        {/* Impact Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Carbon Footprint */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#4285F4]/20 hover:border-[#4285F4]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(66,133,244,0.1)]">
            <div className="w-16 h-16 bg-[#4285F4]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[#4285F4]">Instant Savings</h3>
            <p className="text-gray-600 mb-6">Cut operational costs while boosting your green credentials</p>
            <div className="text-4xl font-bold text-[#4285F4]">$12,000</div>
            <p className="text-sm text-gray-500">Average yearly savings</p>
          </div>

          {/* Recycling Impact */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#F4B400]/20 hover:border-[#F4B400]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(244,180,0,0.1)]">
            <div className="w-16 h-16 bg-[#F4B400]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#F4B400]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[#F4B400]">Efficiency Boost</h3>
            <p className="text-gray-600 mb-6">Maximize resource recovery and minimize waste costs</p>
            <div className="text-4xl font-bold text-[#F4B400]">85%</div>
            <p className="text-sm text-gray-500">Waste reduction achieved</p>
          </div>

          {/* Environmental Score */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#0F9D58]/20 hover:border-[#0F9D58]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,157,88,0.1)]">
            <div className="w-16 h-16 bg-[#0F9D58]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#0F9D58]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[#0F9D58]">ROI Score</h3>
            <p className="text-gray-600 mb-6">Track your return on investment in real-time</p>
            <div className="text-4xl font-bold text-[#0F9D58]">312%</div>
            <p className="text-sm text-gray-500">Average ROI in year 1</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/calculate-savings')}
            className="inline-flex items-center px-8 py-3 bg-[#4285F4] hover:bg-[#3367D6] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-0.5"
          >
            Calculate Your Savings
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}; 