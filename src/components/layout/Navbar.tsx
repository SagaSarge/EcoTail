import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

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
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2196F3] to-[#1976D2] shadow-lg group-hover:shadow-[#2196F3]/30 transition-all duration-300 ${
                isScrolled ? 'shadow-[0_4px_12px_rgba(33,150,243,0.2)]' : ''
              }`} />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#1976D2] group-hover:from-[#1976D2] group-hover:to-[#2196F3] transition-all duration-300">
                EcoTail
              </span>
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center">
              {!user ? (
                <button
                  onClick={signIn}
                  className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-xl shadow-lg hover:shadow-[0_5px_20px_rgba(33,150,243,0.3)] hover:scale-[1.02] transition-all duration-300"
                >
                  Sign In
                </button>
              ) : (
                <Link
                  to="/dashboard"
                  className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-xl shadow-lg hover:shadow-[0_5px_20px_rgba(33,150,243,0.3)] hover:scale-[1.02] transition-all duration-300"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}; 