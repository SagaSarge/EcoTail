import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const LandingHero: React.FC = () => {
  const [rotatingWord, setRotatingWord] = useState('friends');
  
  useEffect(() => {
    const words = ['friends', 'family', 'work', 'home'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setRotatingWord(words[currentIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-white">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-gray-900">Sustainable</span>{' '}
            <span className="text-[#2196F3]">Saga</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            AI Rewards Zero Waste
          </p>
          <p className="mt-4 text-lg text-gray-500">
            What story does your{' '}
            <span className="text-[#2196F3]">{rotatingWord}</span>{' '}
            recycling habits tell?
          </p>
          <div className="mt-8">
            <Link
              to="/get-started"
              className="inline-block px-8 py-3 bg-[#2196F3] text-white rounded-lg font-medium hover:bg-[#1976D2] transition-colors duration-200"
            >
              Buy Now
            </Link>
          </div>
          <p className="mt-4 text-sm text-[#2196F3] font-medium">
            Pre Order V2
          </p>
        </div>

        {/* Product Showcase */}
        <div className="mt-16 relative h-[600px] flex items-center justify-center">
          {/* Left Image - Mobile App */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-[500px] bg-white rounded-3xl shadow-xl transform -rotate-6 overflow-hidden border border-gray-100">
            <div className="absolute inset-0 p-6">
              {/* Phone Frame */}
              <div className="h-full w-full bg-black rounded-2xl p-3 shadow-inner">
                {/* Screen */}
                <div className="h-full w-full bg-white rounded-xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-8 bg-gray-50 border-b flex items-center justify-between px-4">
                    <div className="w-12 h-2.5 bg-[#2196F3]/30 rounded-full" />
                    <div className="w-6 h-2.5 bg-[#2196F3]/30 rounded-full" />
                  </div>
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    <div className="w-full h-32 bg-[#2196F3]/5 rounded-xl flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#2196F3]/10 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#2196F3] rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="w-3/4 h-6 bg-[#2196F3]/5 rounded-full" />
                    <div className="w-1/2 h-6 bg-[#2196F3]/5 rounded-full" />
                    <div className="flex space-x-3">
                      <div className="w-14 h-14 bg-[#2196F3]/10 rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#2196F3]/20 rounded-lg" />
                      </div>
                      <div className="w-14 h-14 bg-[#2196F3]/10 rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#2196F3]/20 rounded-lg" />
                      </div>
                      <div className="w-14 h-14 bg-[#2196F3]/10 rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#2196F3]/20 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Image - Smart Bin */}
          <div className="relative w-full max-w-3xl h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[500px] relative">
                {/* Bin Body */}
                <div className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-b from-[#2196F3] to-[#1976D2] rounded-3xl shadow-lg">
                  {/* Display Screen */}
                  <div className="absolute top-8 left-8 right-8 h-40 bg-black/90 rounded-2xl overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2196F3]/20 to-[#2196F3]/5" />
                    <div className="absolute bottom-4 left-4 right-4 h-8 bg-[#2196F3]/20 rounded-xl" />
                  </div>
                  {/* Bin Opening */}
                  <div className="absolute top-56 left-8 right-8 h-24 bg-black/20 rounded-2xl shadow-inner" />
                  {/* Status Lights */}
                  <div className="absolute top-[350px] left-8 flex space-x-3">
                    <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                    <div className="w-4 h-4 rounded-full bg-[#2196F3] animate-pulse delay-150 shadow-lg shadow-[#2196F3]/50" />
                  </div>
                </div>
                {/* Lid */}
                <div className="absolute top-0 inset-x-6 h-32 bg-gradient-to-b from-[#1976D2] to-[#2196F3] rounded-t-3xl shadow-lg" />
              </div>
            </div>
          </div>
          
          {/* Right Image - Analytics Dashboard */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-[500px] bg-white rounded-3xl shadow-xl transform rotate-6 overflow-hidden border border-gray-100">
            <div className="absolute inset-0 p-8">
              {/* Dashboard Layout */}
              <div className="h-full w-full bg-gray-50 rounded-2xl p-6 space-y-6">
                {/* Charts */}
                <div className="h-40 bg-white rounded-xl shadow-sm p-4">
                  <div className="w-full h-full bg-gradient-to-r from-[#2196F3]/10 to-[#2196F3]/5 rounded-lg relative">
                    <div className="absolute bottom-2 inset-x-2 h-24 flex items-end space-x-2">
                      {[40, 70, 55, 80, 60, 90, 75].map((height, i) => (
                        <div
                          key={i}
                          style={{ height: `${height}%` }}
                          className="flex-1 bg-[#2196F3]/60 rounded-t-lg transition-all duration-300 hover:bg-[#2196F3]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white rounded-xl shadow-sm p-3">
                    <div className="w-10 h-10 mb-2 rounded-full bg-[#2196F3]/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#2196F3]/30" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-16 h-2.5 bg-[#2196F3]/20 rounded-full" />
                      <div className="w-12 h-2.5 bg-[#2196F3]/10 rounded-full" />
                    </div>
                  </div>
                  <div className="h-24 bg-white rounded-xl shadow-sm p-3">
                    <div className="w-10 h-10 mb-2 rounded-full bg-[#2196F3]/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#2196F3]/30" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-16 h-2.5 bg-[#2196F3]/20 rounded-full" />
                      <div className="w-12 h-2.5 bg-[#2196F3]/10 rounded-full" />
                    </div>
                  </div>
                </div>
                {/* List */}
                <div className="space-y-3">
                  <div className="h-8 bg-white rounded-xl shadow-sm p-2 flex items-center">
                    <div className="w-24 h-2.5 bg-[#2196F3]/20 rounded-full" />
                  </div>
                  <div className="h-8 bg-white rounded-xl shadow-sm p-2 flex items-center">
                    <div className="w-20 h-2.5 bg-[#2196F3]/20 rounded-full" />
                  </div>
                  <div className="h-8 bg-white rounded-xl shadow-sm p-2 flex items-center">
                    <div className="w-28 h-2.5 bg-[#2196F3]/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Free Resource Popup */}
          <div className="absolute -top-8 -right-4 bg-white rounded-2xl shadow-lg p-4 w-64 transform rotate-3">
            <div className="flex items-start">
              <div className="bg-[#2196F3] text-white rounded-lg p-1 mr-3">
                <span className="text-lg">+</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Free Resource</h3>
                <p className="text-sm text-gray-600">Download our Recycling Gov Book.</p>
                <button className="mt-2 text-sm text-white bg-[#2196F3] px-4 py-1 rounded-lg">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 