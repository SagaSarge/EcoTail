import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EnvironmentalImpactSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-success-400/10 to-success-400/5 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-success-400/10 to-success-400/5 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-success-400 font-semibold tracking-wide uppercase">ENVIRONMENTAL IMPACT</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Turn Your Recycling Into an EcoTale Story
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join businesses making waste management their sustainability success story
          </p>
        </div>

        {/* Impact metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Carbon Reduction */}
          <div className="bg-success-400/5 rounded-xl p-8 border border-success-400/20 hover:border-success-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-success-400/10 rounded-lg">
                <svg className="w-6 h-6 text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Carbon Reduction</h3>
            </div>
            <p className="text-gray-600">Reduce your carbon footprint with smart waste management</p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-success-400">-45%</div>
              <div className="text-sm text-gray-500">Average reduction in CO2 emissions</div>
            </div>
          </div>

          {/* Recycling Rate */}
          <div className="bg-success-400/5 rounded-xl p-8 border border-success-400/20 hover:border-success-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-success-400/10 rounded-lg">
                <svg className="w-6 h-6 text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Recycling Rate</h3>
            </div>
            <p className="text-gray-600">Increase your recycling efficiency with AI-powered sorting</p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-success-400">+75%</div>
              <div className="text-sm text-gray-500">Improvement in recycling rates</div>
            </div>
          </div>

          {/* Waste Reduction */}
          <div className="bg-success-400/5 rounded-xl p-8 border border-success-400/20 hover:border-success-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-success-400/10 rounded-lg">
                <svg className="w-6 h-6 text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Waste Reduction</h3>
            </div>
            <p className="text-gray-600">Minimize waste through smart tracking and optimization</p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-success-400">-30%</div>
              <div className="text-sm text-gray-500">Average waste volume reduction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/calculate-impact')}
            className="inline-flex items-center px-8 py-3 rounded-xl bg-success-400 text-white font-medium hover:bg-success-400/90 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Calculate Your Impact
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}; 