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
              alt="EcoTale Mobile App Interface"
              className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100"
            />
            <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Center Image - Smart Bin */}
          <div className="relative w-full max-w-3xl h-[600px] flex items-center justify-center p-8">
            <img 
              src="/images/landing/smart-bin.png"
              alt="Smart Bin"
              className="max-h-[500px] w-auto object-contain rounded-3xl shadow-xl"
              onError={(e) => {
                console.error('Smart bin image failed to load');
                const img = e.target as HTMLImageElement;
                img.style.border = '2px solid red';
                img.style.padding = '2rem';
              }}
            />
          </div>
          
          {/* Right Image - Analytics Dashboard */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-[500px] transform rotate-6 transition-all duration-300 hover:rotate-0">
            <img 
              src="/images/landing/analytics.png" 
              alt="EcoTale Analytics Dashboard"
              className="w-full h-full object-cover rounded-3xl shadow-xl border border-gray-100"
            />
            <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}; 