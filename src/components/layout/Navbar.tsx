import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, signIn } = useAuth();
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
      
      setIsScrolled(currentScrollY > 50);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 transform
          ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary-600" />
              <Link to="/" className="ml-3 text-xl font-bold text-gray-900">
                EcoTale
              </Link>
              <div className="hidden md:flex items-center space-x-6 ml-12">
                <Link to="/ai-innovations" className="text-gray-700 hover:text-primary-600 transition-colors">
                  AI Innovations
                </Link>
                <Link to="/clean" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Clean
                </Link>
                <Link to="/labs" className="text-gray-700 hover:text-primary-600 transition-colors">
                  By Self Labs
                </Link>
                <Link to="/education" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Education
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Center Navbar */}
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform
          ${isScrolled && scrollDirection === 'down' 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'}`}
      >
        <div className="bg-white/40 backdrop-blur-md rounded-[24px] shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] border-[1.5px] border-white/60 px-5 py-2.5">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full bg-primary-600 transition-all duration-500 ${
                isScrolled ? 'shadow-[0_0_15px_rgba(0,112,243,0.3)]' : ''
              }`} />
              <Link to="/" className="ml-3 text-xl font-bold text-gray-900">
                EcoTale
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/ai-innovations" className="text-gray-700 hover:text-primary-600 transition-colors">
                AI Innovations
              </Link>
              <Link to="/clean" className="text-gray-700 hover:text-primary-600 transition-colors">
                Clean
              </Link>
              <Link to="/labs" className="text-gray-700 hover:text-primary-600 transition-colors">
                By Self Labs
              </Link>
              <Link to="/education" className="text-gray-700 hover:text-primary-600 transition-colors">
                Education
              </Link>
            </div>

            {/* Sign In Button */}
            {!user && (
              <button
                onClick={signIn}
                className="px-5 py-2 bg-white/90 text-primary-600 font-medium rounded-2xl hover:bg-primary-50/80 transition-all duration-300 shadow-[0_2px_10px_-2px_rgba(0,112,243,0.2)] hover:shadow-[0_4px_16px_-4px_rgba(0,112,243,0.3)] border border-primary-100 ml-2"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Only on Fixed Navbar */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-primary-600 focus:outline-none"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}; 