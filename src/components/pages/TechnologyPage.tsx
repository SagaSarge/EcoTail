import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../hooks/useAnalytics';

export const TechnologyPage: React.FC = () => {
  const navigate = useNavigate();
  const { trackPurchaseClick } = useAnalytics();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetStartedClick = () => {
    trackPurchaseClick('technology_page', {
      button_type: 'cta',
      button_text: 'Get Started Now',
      page_section: 'bottom_cta'
    });
    navigate('/purchase');
  };

  return (
    <div className="bg-white relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(45deg)_rotateZ(45deg)] origin-[center_-100%]" />
      </div>

      {/* Ambient Gradients */}
      <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-sky-100/40 to-blue-50/40 blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-50/40 to-sky-100/40 blur-3xl opacity-50" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50/80 border border-sky-100 mb-8 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-sm">
            <span className="text-sky-600 font-semibold tracking-widest text-sm">
              ADVANCED WASTE INTELLIGENCE
            </span>
          </div>
          
          <h1 className="text-7xl font-bold mb-8">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                Intelligent Waste
              </span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              Management System
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Experience the future of waste management powered by advanced intelligence systems and autonomous technology, revolutionizing sustainability in the modern world.
          </p>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-20 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Core Intelligence Systems
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advanced Intelligence */}
            <div className="group relative bg-white rounded-2xl p-8 border border-sky-100 hover:border-sky-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-sky-100">
                  <svg className="w-8 h-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-sky-600">Advanced Intelligence</h3>
                <p className="text-gray-600 text-lg">Self-learning algorithms that continuously evolve to optimize waste classification and processing efficiency.</p>
              </div>
            </div>

            {/* Environmental Sensing */}
            <div className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-blue-100">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Environmental Sensing</h3>
                <p className="text-gray-600 text-lg">Multi-dimensional environmental analysis system for precise material identification and sorting.</p>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="group relative bg-white rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-indigo-100">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Predictive Analytics</h3>
                <p className="text-gray-600 text-lg">Advanced forecasting engine that optimizes waste management processes and predicts future patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-20 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                System Architecture
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Interface Layer */}
            <div className="group relative bg-white rounded-2xl p-8 border border-sky-100 hover:border-sky-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-sky-100">
                  <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-sky-600">Interface Layer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-2"></span>
                    Intuitive Controls
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-2"></span>
                    Real-time Feedback
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-2"></span>
                    Visual Analytics
                  </li>
                </ul>
              </div>
            </div>

            {/* Processing Core */}
            <div className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-blue-100">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Processing Core</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Neural Networks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Edge Computing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Real-time Analysis
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Management */}
            <div className="group relative bg-white rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-indigo-100">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z M7 4v16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Data Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Cloud Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Secure Storage
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Data Sync
                  </li>
                </ul>
              </div>
            </div>

            {/* Autonomous Systems */}
            <div className="group relative bg-white rounded-2xl p-8 border border-violet-100 hover:border-violet-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-violet-100">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-violet-600">Autonomous Systems</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-2"></span>
                    Smart Control
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-2"></span>
                    Adaptive Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-2"></span>
                    Auto-optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Systems Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-50 via-transparent to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Intelligent System Components
              </span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-sky-100">
              <h3 className="text-2xl font-semibold mb-6 text-sky-600">Core Processing Unit</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Advanced Processing Architecture</span>
                    <p className="text-gray-600 text-sm">High-performance computing for real-time analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Multi-spectrum Analysis System</span>
                    <p className="text-gray-600 text-sm">Comprehensive material identification</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Smart Sensor Array</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Environmental Analysis Suite</span>
                    <p className="text-gray-600 text-sm">Comprehensive material and environmental monitoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Interactive Feedback System</span>
                    <p className="text-gray-600 text-sm">Real-time status and guidance indicators</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-blue-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-8">
              <span className="relative inline-block">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Experience the Future of Waste Management
                </span>
              </span>
            </h2>
            <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">Join the revolution in intelligent waste management technology today.</p>
            <button 
              onClick={handleGetStartedClick}
              className="px-8 py-4 rounded-full font-semibold text-white
                       bg-gradient-to-r from-sky-500 to-blue-500 
                       hover:from-sky-600 hover:to-blue-600
                       transform transition-all duration-500 hover:scale-105
                       shadow-lg hover:shadow-sky-500/25"
            >
              <span className="relative z-10">Get Started Now</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}; 