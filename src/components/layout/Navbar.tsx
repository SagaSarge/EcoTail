import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20 py-2' : 'py-4'
    }`}>
      <div className={`mx-auto transition-all duration-300 ${
        isScrolled ? 'flex justify-center items-center' : ''
      }`}>
        <div className={`flex items-center ${isScrolled ? 'justify-center' : 'justify-between'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary-600" />
            <div className={`hidden md:flex items-center space-x-6 ml-4`}>
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

          {/* Sign In Button - Only show when scrolled */}
          {isScrolled && !user && (
            <button
              onClick={signIn}
              className="ml-8 px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
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
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
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
              {!user && (
                <button
                  onClick={signIn}
                  className="w-full px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 