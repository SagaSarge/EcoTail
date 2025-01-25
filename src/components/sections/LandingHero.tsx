import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const LandingHero: React.FC = () => {
  const [rotatingWord, setRotatingWord] = useState('families');
  
  useEffect(() => {
    const words = ['families', 'homes', 'work', 'friends', 'kids'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setRotatingWord(words[currentIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[20%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#4285F4]/10 via-[#3367D6]/5 to-transparent blur-3xl" />
        <div className="absolute top-[20%] -right-[20%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-[#0F9D58]/10 via-[#0F9D58]/5 to-transparent blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#3367D6]">
              Effortless
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0F9D58] to-[#0F9D58]/80">
              Sustainability
            </span>
          </h1>
          <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">
            AI Rewards Zero Waste
          </p>
          <p className="mt-6 text-lg sm:text-xl text-gray-600">
            What story does your{' '}
            <span className="inline-block px-2 py-1 rounded-lg bg-[#4285F4]/5 text-[#4285F4] font-medium">
              {rotatingWord}
            </span>{' '}
            recycling habits tell?
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-started"
              className="w-full sm:w-auto px-8 py-4 text-white bg-gradient-to-r from-[#4285F4] to-[#3367D6] rounded-2xl font-medium shadow-lg hover:shadow-[0_8px_30px_rgba(66,133,244,0.3)] hover:scale-[1.02] transition-all duration-300"
            >
              Pre-order Now
            </Link>
            <Link
              to="/technology"
              className="w-full sm:w-auto px-8 py-4 text-gray-600 hover:text-[#4285F4] bg-white/50 hover:bg-white rounded-2xl font-medium shadow-sm hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#4285F4] font-medium">
            Limited Time Pre-order Discount for V2
          </p>
        </div>

        {/* Product Showcase */}
        <div className="mt-20 relative">
          {/* Main Product - Smart Bin */}
          <div className="relative z-20 mx-auto max-w-4xl">
            <div className="aspect-[16/9] rounded-3xl bg-gradient-to-br from-white to-gray-100 shadow-2xl border border-white/20 overflow-hidden">
              {/* Smart Bin Design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[500px] relative">
                  {/* Bin Body */}
                  <div className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-b from-[#4285F4] to-[#3367D6] rounded-2xl shadow-lg">
                    {/* Display Screen */}
                    <div className="absolute top-6 left-6 right-6 h-32 bg-black/80 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0F9D58]/20 to-[#4285F4]/20" />
                      <div className="absolute bottom-4 left-4 right-4 h-6 bg-[#0F9D58]/30 rounded-lg" />
                    </div>
                    {/* Bin Opening */}
                    <div className="absolute top-44 left-6 right-6 h-20 bg-black/10 rounded-xl" />
                    {/* Status Lights */}
                    <div className="absolute top-[270px] left-6 flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#0F9D58] animate-pulse" />
                      <div className="w-3 h-3 rounded-full bg-[#4285F4] animate-pulse delay-100" />
                    </div>
                  </div>
                  {/* Lid */}
                  <div className="absolute top-0 inset-x-4 h-24 bg-gradient-to-b from-[#3367D6] to-[#4285F4] rounded-t-2xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Left Side - Mobile App */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 aspect-[3/4] rounded-3xl bg-gradient-to-br from-white to-gray-100 shadow-2xl border border-white/20 -rotate-6 z-10 overflow-hidden">
            <div className="absolute inset-0 p-4">
              {/* Phone Frame */}
              <div className="h-full w-full bg-black rounded-2xl p-2 relative">
                {/* Screen */}
                <div className="h-full w-full bg-white rounded-xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-6 bg-[#4285F4]/10 flex items-center justify-between px-4">
                    <div className="w-8 h-2 bg-[#4285F4]/30 rounded-full" />
                    <div className="w-4 h-2 bg-[#4285F4]/30 rounded-full" />
                  </div>
                  {/* App Content */}
                  <div className="p-3 space-y-3">
                    <div className="w-full h-24 bg-[#4285F4]/5 rounded-lg" />
                    <div className="w-3/4 h-4 bg-[#4285F4]/10 rounded-full" />
                    <div className="w-1/2 h-4 bg-[#4285F4]/10 rounded-full" />
                    <div className="flex space-x-2">
                      <div className="w-10 h-10 bg-[#0F9D58]/10 rounded-lg" />
                      <div className="w-10 h-10 bg-[#4285F4]/10 rounded-lg" />
                      <div className="w-10 h-10 bg-[#3367D6]/10 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Analytics Dashboard */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-64 aspect-[3/4] rounded-3xl bg-gradient-to-br from-white to-gray-100 shadow-2xl border border-white/20 rotate-6 z-10 overflow-hidden">
            <div className="absolute inset-0 p-6">
              {/* Dashboard Layout */}
              <div className="h-full w-full bg-[#F8FAFC] rounded-xl p-4 space-y-4">
                {/* Charts */}
                <div className="h-32 bg-white rounded-lg shadow-sm p-3">
                  <div className="w-full h-full bg-gradient-to-r from-[#4285F4]/20 to-[#0F9D58]/20 rounded-lg" />
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 bg-white rounded-lg shadow-sm p-2">
                    <div className="w-8 h-8 mb-2 rounded-full bg-[#4285F4]/10" />
                    <div className="w-12 h-2 bg-[#4285F4]/20 rounded-full" />
                  </div>
                  <div className="h-20 bg-white rounded-lg shadow-sm p-2">
                    <div className="w-8 h-8 mb-2 rounded-full bg-[#0F9D58]/10" />
                    <div className="w-12 h-2 bg-[#0F9D58]/20 rounded-full" />
                  </div>
                </div>
                {/* List */}
                <div className="space-y-2">
                  <div className="h-6 bg-white rounded-lg shadow-sm" />
                  <div className="h-6 bg-white rounded-lg shadow-sm" />
                  <div className="h-6 bg-white rounded-lg shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 