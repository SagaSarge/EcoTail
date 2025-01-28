import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const prevScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setIsScrolled(currentScrollY > 20);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMobileClick = () => {
    navigate('/mobile');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform
        ${scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'}
        ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)]' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#1976D2] group-hover:from-[#1976D2] group-hover:to-[#2196F3] transition-all duration-300">
              EcoTale
            </span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleMobileClick}
              className={`text-sm font-medium transition-colors duration-200 
                ${location.pathname === '/mobile' 
                  ? 'text-green-600' 
                  : 'text-gray-600 hover:text-green-600'}`}
            >
              Mobile App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 