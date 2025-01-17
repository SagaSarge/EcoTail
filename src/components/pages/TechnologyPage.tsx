import React from 'react';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 lg:text-5xl">
              Powered by
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"> Advanced Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-driven solutions are revolutionizing waste management and sustainability
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600">Advanced algorithms that learn and adapt to your waste patterns, providing personalized recommendations and insights.</p>
            </div>

            {/* IoT Sensors */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">IoT Sensors</h3>
              <p className="text-gray-600">Smart sensors that monitor waste levels, composition, and environmental conditions in real-time.</p>
            </div>

            {/* Data Analytics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
              <p className="text-gray-600">Powerful analytics engine that transforms raw data into actionable insights and predictive recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Smart Collection</h3>
                  <p className="text-gray-600">IoT sensors continuously monitor waste levels and composition in real-time.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
                  <p className="text-gray-600">Our AI analyzes the data to identify patterns and optimization opportunities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Smart Recommendations</h3>
                  <p className="text-gray-600">Receive personalized recommendations to optimize waste management and increase savings.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
              {/* Placeholder for interactive diagram or animation */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Interactive Technology Demo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Innovation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Real-time Monitoring */}
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">24/7 waste monitoring with instant alerts and notifications.</p>
            </div>

            {/* Predictive Analytics */}
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast waste patterns and optimize collection schedules.</p>
            </div>

            {/* Smart Sorting */}
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Sorting</h3>
              <p className="text-gray-600">AI-powered waste classification and sorting recommendations.</p>
            </div>

            {/* Automated Reporting */}
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Automated Reporting</h3>
              <p className="text-gray-600">Generate detailed sustainability and efficiency reports automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Waste Management?</h2>
          <p className="text-xl mb-8 opacity-90">Join the future of smart, sustainable waste management today.</p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}; 