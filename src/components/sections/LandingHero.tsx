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
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-[500px] transform -rotate-6 transition-all duration-300 hover:rotate-0">
            <img 
              src="/images/landing/mobile-app.png" 
              alt="EcoTail Mobile App Interface"
              className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100"
            />
            <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Center Image - Smart Bin */}
          <div className="relative w-full max-w-3xl h-[500px] transition-all duration-300 hover:scale-105">
            <img 
              src="/images/landing/smart-bin.png" 
              alt="EcoTail Smart Recycling Bin"
              className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100"
            />
            <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Right Image - Analytics Dashboard */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-[500px] transform rotate-6 transition-all duration-300 hover:rotate-0">
            <img 
              src="/images/landing/analytics.png" 
              alt="EcoTail Analytics Dashboard"
              className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100"
            />
            <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-t from-black/20 to-transparent" />
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