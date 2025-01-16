import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const StickyProductCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setIsClosed(true);
    }, 2000);
  };

  if (!isVisible || isClosed) return null;

  return (
    <div className={`fixed right-4 top-1/3 z-40 w-64 transform transition-all duration-500 
                    ${isClosing ? 'animate-shoot-to-left' : 'animate-fade-in-right'}`}>
      <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-primary-100 p-6 
                    hover:shadow-2xl hover:border-primary-200 transition-all hover:translate-x-2">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center
                     hover:bg-gray-300 transition-colors duration-200"
          aria-label="Close"
        >
          <svg 
            className="w-4 h-4 text-gray-500" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col space-y-4">
          {/* Icon or small image */}
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900">Free Resource</h3>
          
          {/* Description */}
          <p className="text-sm text-gray-600">
            Download our comprehensive Recycling Gov Book and learn best practices.
          </p>

          {/* CTA Button */}
          <Button 
            variant="primary"
            className="w-full text-sm py-2"
            onClick={() => {}}
          >
            Download Free Book
          </Button>
        </div>
      </div>
    </div>
  );
}; 