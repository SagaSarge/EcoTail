import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EnvironmentalImpactSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Globe SVG Background */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-900">
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
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-900">
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
            Measure Your
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> Environmental Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your contribution to a sustainable future with real-time environmental metrics
          </p>
        </div>

        {/* Impact Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Carbon Footprint */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Carbon Reduction</h3>
            <p className="text-gray-600 mb-6">Monitor your carbon footprint reduction through smart waste management</p>
            <div className="text-4xl font-bold text-green-600">1.2 tons</div>
            <p className="text-sm text-gray-500">CO₂ saved per month</p>
          </div>

          {/* Resource Conservation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Resource Saved</h3>
            <p className="text-gray-600 mb-6">Track resources conserved through efficient waste management</p>
            <div className="text-4xl font-bold text-emerald-600">850 kg</div>
            <p className="text-sm text-gray-500">Materials recycled monthly</p>
          </div>

          {/* Environmental Score */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Impact Score</h3>
            <p className="text-gray-600 mb-6">Your environmental impact rating based on sustainable practices</p>
            <div className="text-4xl font-bold text-teal-600">92/100</div>
            <p className="text-sm text-gray-500">Sustainability rating</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/calculate-impact')}
            className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Calculate Your Impact
          </button>
        </div>
      </div>
    </section>
  );
}; 