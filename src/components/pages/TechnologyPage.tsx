import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TechnologyPage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white relative min-h-screen overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [transform:rotateX(45deg)_rotateZ(45deg)] origin-[center_-100%]" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-100 to-blue-50 blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-50 to-sky-100 blur-3xl opacity-60" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 border border-sky-100 mb-8 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <span className="text-sky-600 font-semibold tracking-widest text-sm">
              SMART WASTE TECHNOLOGY
            </span>
          </div>
          
          <h1 className="text-7xl font-bold mb-8">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                Next Generation
              </span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              Waste Management
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Experience the future of waste management powered by advanced AI and IoT technology, transforming how we handle waste in the modern world.
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
                Core Technologies
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Card */}
            <div className="group relative bg-white rounded-2xl p-8 border border-sky-100 hover:border-sky-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-sky-100">
                  <svg className="w-8 h-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-sky-600">AI & Machine Learning</h3>
                <p className="text-gray-600 text-lg">Advanced algorithms that learn and adapt to your waste patterns, providing personalized recommendations.</p>
              </div>
            </div>

            {/* IoT Card */}
            <div className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-blue-100">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">IoT Sensors</h3>
                <p className="text-gray-600 text-lg">Smart sensors that monitor waste levels, composition, and environmental conditions in real-time.</p>
              </div>
            </div>

            {/* Analytics Card */}
            <div className="group relative bg-white rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-indigo-100">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Data Analytics</h3>
                <p className="text-gray-600 text-lg">Powerful analytics engine that transforms raw data into actionable insights and recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-20 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Our Technical Stack
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Stack */}
            <div className="group relative bg-white rounded-2xl p-8 border border-sky-100 hover:border-sky-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-sky-100">
                  <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-sky-600">Frontend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-2"></span>
                    React
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mr-2"></span>
                    Zustand
                  </li>
                </ul>
              </div>
            </div>

            {/* Backend Stack */}
            <div className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-blue-100">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Backend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Express.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    TensorFlow Lite
                  </li>
                </ul>
              </div>
            </div>

            {/* Database & Auth */}
            <div className="group relative bg-white rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-indigo-100">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z M7 4v16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Database & Auth</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Firestore
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Firebase Auth
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Real-time Sync
                  </li>
                </ul>
              </div>
            </div>

            {/* IoT & Hardware */}
            <div className="group relative bg-white rounded-2xl p-8 border border-violet-100 hover:border-violet-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border border-violet-100">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-violet-600">IoT & Hardware</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-2"></span>
                    Raspberry Pi 5
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-2"></span>
                    Smart Sensors
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-2"></span>
                    MQTT Protocol
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Components Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-50 via-transparent to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-sky-200 to-blue-200 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Smart Hardware Components
              </span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-sky-100">
              <h3 className="text-2xl font-semibold mb-6 text-sky-600">Processing & Control</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Raspberry Pi 5</span>
                    <p className="text-gray-600 text-sm">8GB RAM for powerful edge computing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-sky-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">12MP Quad-Camera System</span>
                    <p className="text-gray-600 text-sm">High-resolution waste detection</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Sensors & Actuators</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Advanced Sensor Suite</span>
                    <p className="text-gray-600 text-sm">Ultrasonic, load cells, and motion detection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">LED Feedback System</span>
                    <p className="text-gray-600 text-sm">Real-time visual status indicators</p>
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
                  Ready to Transform Your Waste Management?
                </span>
              </span>
            </h2>
            <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">Join the future of smart, sustainable waste management today.</p>
            <button 
              onClick={() => navigate('/purchase')}
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