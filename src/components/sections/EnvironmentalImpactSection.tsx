import React from 'react';

export const EnvironmentalImpactSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#0f172a_12%,transparent_12.5%,transparent_87%,#0f172a_87.5%,#0f172a),linear-gradient(150deg,#0f172a_12%,transparent_12.5%,transparent_87%,#0f172a_87.5%,#0f172a),linear-gradient(30deg,#0f172a_12%,transparent_12.5%,transparent_87%,#0f172a_87.5%,#0f172a),linear-gradient(150deg,#0f172a_12%,transparent_12.5%,transparent_87%,#0f172a_87.5%,#0f172a),linear-gradient(60deg,#0f172a77_25%,transparent_25.5%,transparent_75%,#0f172a77_75%,#0f172a77),linear-gradient(60deg,#0f172a77_25%,transparent_25.5%,transparent_75%,#0f172a77_75%,#0f172a77)]" style={{
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 lg:text-5xl">
            Measure Your
            <span className="block text-primary-400">Environmental Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track and visualize your contribution to a sustainable future through real-time environmental metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Impact Metrics */}
          <div className="space-y-8">
            {/* Carbon Footprint Card */}
            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Carbon Footprint</h3>
                <span className="text-primary-400">-25%</span>
              </div>
              <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full" style={{ width: '75%' }} />
              </div>
              <p className="mt-4 text-gray-400">Reduced CO₂ emissions through smart waste management</p>
            </div>

            {/* Recycling Rate Card */}
            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Recycling Rate</h3>
                <span className="text-primary-400">+40%</span>
              </div>
              <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full" style={{ width: '85%' }} />
              </div>
              <p className="mt-4 text-gray-400">Increased recycling efficiency with AI-powered sorting</p>
            </div>

            {/* Waste Reduction Card */}
            <div className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Waste Reduction</h3>
                <span className="text-primary-400">-30%</span>
              </div>
              <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full" style={{ width: '65%' }} />
              </div>
              <p className="mt-4 text-gray-400">Overall waste reduction through smart consumption</p>
            </div>
          </div>

          {/* Impact Visualization */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-primary-500 rounded-full opacity-10 blur-3xl" />
            </div>
            
            {/* Earth Visualization */}
            <div className="relative bg-gray-800 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <div className="p-6 flex flex-col items-center justify-center">
                  {/* Replace with actual Earth visualization */}
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-green-500 relative">
                    {/* Animated orbit effect */}
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary-400 animate-spin-slow" style={{ animationDuration: '20s' }} />
                    <div className="absolute inset-2 rounded-full border-4 border-dashed border-primary-300 animate-spin-slow" style={{ animationDuration: '15s' }} />
                    <div className="absolute inset-4 rounded-full border-4 border-dashed border-primary-200 animate-spin-slow" style={{ animationDuration: '10s' }} />
                  </div>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">1.2T</div>
                  <div className="text-sm text-gray-400">CO₂ Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">850K</div>
                  <div className="text-sm text-gray-400">Items Recycled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">45%</div>
                  <div className="text-sm text-gray-400">Less Waste</div>
                </div>
              </div>
            </div>

            {/* Floating Achievement */}
            <div className="absolute -right-4 -bottom-8 transform rotate-6">
              <div className="bg-primary-500 text-white rounded-2xl shadow-lg p-4">
                <div className="text-sm font-semibold">🌟 Achievement Unlocked!</div>
                <div className="text-xs">Carbon Neutral Status</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center px-8 py-3 border-2 border-primary-400 text-primary-400 font-medium rounded-xl hover:bg-primary-400 hover:text-white transition-all duration-300">
            View Detailed Impact Report
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}; 