import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../hooks/useAnalytics';

export const StickyProductCard: React.FC = () => {
  const navigate = useNavigate();
  const { trackPurchaseClick } = useAnalytics();
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
    setTimeout(() => {
      setIsClosed(true);
    }, 2000);
  };

  const handleDownloadClick = () => {
    trackPurchaseClick('sticky_card', {
      button_type: 'download',
      button_text: 'Download',
      card_position: 'sticky_right'
    });
    navigate('/purchase');
  };

  if (!isVisible || isClosed) return null;

  return (
    <div className={`fixed right-4 top-24 z-40 w-44 transform transition-all duration-500 
                    ${isClosing ? 'animate-shoot-to-left' : 'animate-fade-in-right'}`}>
      <div className="relative bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-primary-100 p-3
                    hover:shadow-2xl hover:border-primary-200 transition-all hover:translate-x-2">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center
                     hover:bg-gray-300 transition-colors duration-200"
          aria-label="Close"
        >
          <svg 
            className="w-3 h-3 text-gray-500" 
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

        <div className="flex flex-col space-y-2">
          {/* Icon or small image */}
          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-gray-900">Free Resource</h3>
          
          {/* Description */}
          <p className="text-xs text-gray-600">
            Download our Recycling Gov Book.
          </p>

          {/* CTA Button */}
          <Button 
            variant="primary"
            className="w-full text-xs py-1.5"
            onClick={handleDownloadClick}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}; 