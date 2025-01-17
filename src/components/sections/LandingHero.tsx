import React, { useState, useEffect } from 'react';

export const LandingHero: React.FC = () => {
  const [rotatingWord, setRotatingWord] = useState('families');
  
  useEffect(() => {
    const words = ['families', 'selfs', 'work', 'friends', 'kids'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setRotatingWord(words[currentIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-40 overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900">
            Effortless Sustainability
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            AI Rewards Zero Waste
          </p>
          <p className="mt-4 text-lg text-gray-500">
            What story does your <span className="text-primary-600">{rotatingWord}</span> recycling habits tell?
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors duration-200">
              Buy Now
            </button>
          </div>
          <p className="mt-4 text-sm text-primary-600 font-medium">
            Pre Order V2
          </p>
        </div>
      </div>

      {/* Image Placeholders */}
      <div className="absolute top-0 left-0 w-[740px] h-[400px] bg-gray-300 rounded-r-3xl shadow-xl border-2 border-gray-400" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[672px] h-[450px] bg-gray-300 rounded-3xl shadow-xl border-2 border-gray-400" />
      <div className="absolute top-24 left-[calc(50%+450px)] w-[275px] h-[450px] bg-gray-300 rounded-3xl shadow-xl border-2 border-gray-400" />
    </section>
  );
}; 