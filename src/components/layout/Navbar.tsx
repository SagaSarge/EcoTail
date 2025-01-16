import React, { useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-6 px-4 z-50">
      <nav className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl mx-auto max-w-7xl border border-white/20
                    transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10
                    hover:border-primary-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              {/* Logo Circle and Text */}
              <div className="flex items-center space-x-3 pl-4">
                <div className="w-8 h-8 rounded-full bg-primary-600 shadow-lg shadow-primary-500/30"></div>
                <span className="text-2xl font-bold text-primary-600">EcoTail</span>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-6 ml-8">
                <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium
                                   transition-all duration-300 hover:bg-primary-50/50">AI Innovations</a>
                <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium
                                   transition-all duration-300 hover:bg-primary-50/50">Clean</a>
                <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium
                                   transition-all duration-300 hover:bg-primary-50/50">By Self Labs</a>
                <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium
                                   transition-all duration-300 hover:bg-primary-50/50">Education</a>
              </div>
            </div>

            <div className="flex items-center pr-4">
              {/* Auth Button */}
              <div className="hidden md:block">
                {user ? (
                  <Button variant="outline" onClick={() => {}} className="shadow-lg shadow-primary-500/10 hover:shadow-primary-500/20">
                    Profile
                  </Button>
                ) : (
                  <Button variant="primary" className="shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30">
                    Sign In
                  </Button>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger icon */}
                  <svg
                    className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* Close icon */}
                  <svg
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">AI Innovations</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Clean</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">By Self Labs</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">Education</a>
            {/* Mobile auth button */}
            <div className="mt-4 px-3">
              {user ? (
                <Button variant="outline" onClick={() => {}} className="w-full">
                  Profile
                </Button>
              ) : (
                <Button variant="primary" className="w-full">
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}; 