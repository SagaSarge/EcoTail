import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, signIn } = useAuth();
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

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const showSignInButton = location.pathname === '/';

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
            {/* Logo - Always clickable */}
            <button 
              onClick={handleLogoClick}
              className="flex items-center space-x-3 group cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#1976D2] group-hover:from-[#1976D2] group-hover:to-[#2196F3] transition-all duration-300">
                EcoTale
              </span>
            </button>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              {/* Home Button - Show when signed in and not on landing page */}
              {user && location.pathname !== '/' && (
                <button
                  onClick={handleLogoClick}
                  className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </button>
              )}
              {/* Demo/Dashboard Button */}
              {!user ? (
                showSignInButton && (
                  <button
                    onClick={signIn}
                    className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-xl shadow-lg hover:shadow-[0_5px_20px_rgba(33,150,243,0.3)] hover:scale-[1.02] transition-all duration-300"
                  >
                    Demo
                  </button>
                )
              ) : (
                <button
                  onClick={handleDashboardClick}
                  className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-xl shadow-lg hover:shadow-[0_5px_20px_rgba(33,150,243,0.3)] hover:scale-[1.02] transition-all duration-300"
                >
                  Dashboard
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}; 