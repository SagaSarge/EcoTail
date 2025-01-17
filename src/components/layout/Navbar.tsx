import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { user, signIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / maxScroll) * 100;
      setScrollProgress(progress);
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/60 backdrop-blur-xl mx-auto w-fit left-1/2 -translate-x-1/2' 
        : 'py-4 left-0'
    }`}>
      {/* Orbital Glow Effect */}
      {isScrolled && (
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Base glow */}
          <div 
            className="absolute inset-0 rounded-full border border-primary-400/30"
            style={{
              boxShadow: `0 0 15px 1px rgba(0,112,243,0.15), 
                         inset 0 0 15px 1px rgba(0,112,243,0.1)`
            }}
          />
          {/* Orbiting point */}
          <div 
            className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: '50%',
              top: '0%',
              transform: `rotate(${scrollProgress * 3.6}deg) translateY(-150%) rotate(-${scrollProgress * 3.6}deg)`,
              transition: 'transform 0.1s ease-out',
              background: 'radial-gradient(circle at center, rgba(0,112,243,0.8) 0%, rgba(0,112,243,0.4) 40%, transparent 70%)',
              filter: 'blur(2px)',
              boxShadow: '0 0 20px 5px rgba(0,112,243,0.6)'
            }}
          />
        </div>
      )}
      
      {/* Main Content Container */}
      <div className={`relative rounded-full ${
        isScrolled ? 'bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/70 py-2 px-4' : ''
      }`}>
        <div className={`transition-all duration-500 ${
          isScrolled ? 'flex justify-center items-center' : 'pl-6'
        }`}>
          <div className="flex items-center space-x-4">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full bg-primary-600 transition-all duration-500 ${
                isScrolled ? 'shadow-[0_0_15px_rgba(0,112,243,0.3)]' : ''
              }`} />
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

            {/* Sign In Button - Only show when scrolled */}
            {isScrolled && !user && (
              <button
                onClick={signIn}
                className="ml-12 px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300 shadow-[0_4px_12px_rgba(0,112,243,0.25)] hover:shadow-[0_4px_16px_rgba(0,112,243,0.35)]"
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
      </div>
    </nav>
  );
}; 