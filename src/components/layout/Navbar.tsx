import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

const NAVIGATION_ITEMS = [
  { label: 'Technology', path: '/technology' },
  { label: 'Mobile App', path: '/mobile-app' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, signIn } = useAuth();
  const location = useLocation();
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Main Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform
          ${scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'}
          ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)]' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br from-[#4285F4] to-[#3367D6] shadow-lg group-hover:shadow-[#4285F4]/30 transition-all duration-300 ${
                isScrolled ? 'shadow-[0_4px_12px_rgba(66,133,244,0.2)]' : ''
              }`} />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#3367D6] group-hover:from-[#3367D6] group-hover:to-[#4285F4] transition-all duration-300">
                EcoTail
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-[#4285F4] bg-[#4285F4]/5'
                      : 'text-gray-600 hover:text-[#4285F4] hover:bg-[#4285F4]/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {!user ? (
                <>
                  <button
                    onClick={signIn}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#4285F4] transition-colors duration-300"
                  >
                    Sign In
                  </button>
                  <Link
                    to="/get-started"
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4285F4] to-[#3367D6] rounded-xl shadow-lg hover:shadow-[0_5px_20px_rgba(66,133,244,0.3)] hover:scale-[1.02] transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4285F4] to-[#3367D6] rounded-xl shadow-lg hover:shadow-[0_5px_20px_rgba(66,133,244,0.3)] hover:scale-[1.02] transition-all duration-300"
                >
                  Dashboard
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl transition-colors duration-300 ${
                  isOpen ? 'bg-[#4285F4]/5 text-[#4285F4]' : 'text-gray-600 hover:text-[#4285F4] hover:bg-[#4285F4]/5'
                }`}
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
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white/80 backdrop-blur-xl transition-all duration-500 transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-4">
          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-[#4285F4] bg-[#4285F4]/5'
                    : 'text-gray-600 hover:text-[#4285F4] hover:bg-[#4285F4]/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4 items-center">
            {!user ? (
              <>
                <button
                  onClick={() => {
                    signIn();
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-3 text-center text-gray-600 hover:text-[#4285F4] font-medium transition-colors duration-300"
                >
                  Sign In
                </button>
                <Link
                  to="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-3 text-center text-white bg-gradient-to-r from-[#4285F4] to-[#3367D6] rounded-xl shadow-lg font-medium"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-3 text-center text-white bg-gradient-to-r from-[#4285F4] to-[#3367D6] rounded-xl shadow-lg font-medium"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}; 