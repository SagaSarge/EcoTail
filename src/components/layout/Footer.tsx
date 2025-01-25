import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MAIN_NAVIGATION, SOCIAL_LINKS, COMPANY_INFO } from '../../constants/navigation';
import { SocialIcon } from '../common/SocialIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 pt-32 pb-12 overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent blur-3xl" 
        />
        <div 
          className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#0F9D58]/5 to-transparent blur-3xl" 
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Company Info - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="flex items-center space-x-3 transform transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4285F4] to-[#3367D6] shadow-lg group-hover:shadow-[#4285F4]/30 transition-all duration-300"></div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#3367D6] group-hover:from-[#3367D6] group-hover:to-[#4285F4] transition-all duration-300">
                  {COMPANY_INFO.name}
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex space-x-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_20px_rgba(66,133,244,0.1)] flex items-center justify-center group transition-all duration-300">
                    <SocialIcon
                      platform={social.platform}
                      icon={social.icon}
                      url={social.url}
                      className="w-5 h-5 text-gray-400 group-hover:text-[#4285F4] transition-colors duration-200"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Spans 4 columns */}
          <nav className="lg:col-span-4 relative" aria-label="Footer navigation">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-[#4285F4] uppercase tracking-wider">Navigation</h3>
                <ul className="space-y-4">
                  {MAIN_NAVIGATION.slice(0, Math.ceil(MAIN_NAVIGATION.length / 2)).map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className="group text-base text-gray-500 transition-all duration-300 hover:text-[#4285F4]"
                      >
                        <span className="relative inline-block">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4285F4]/30 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-[#4285F4] uppercase tracking-wider">Quick Links</h3>
                <ul className="space-y-4">
                  {MAIN_NAVIGATION.slice(Math.ceil(MAIN_NAVIGATION.length / 2)).map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className="group text-base text-gray-500 transition-all duration-300 hover:text-[#4285F4]"
                      >
                        <span className="relative inline-block">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4285F4]/30 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Newsletter and Contact - Spans 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-[#4285F4] uppercase tracking-wider">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="max-w-xs transform transition-all duration-300 hover:scale-[1.02]">
                  <label htmlFor="email-input" className="sr-only">Email address</label>
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-base text-gray-900 placeholder-gray-400 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4285F4]/30 focus:shadow-[0_5px_20px_rgba(66,133,244,0.1)] transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full max-w-xs px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-[#4285F4] to-[#3367D6] rounded-xl shadow-lg hover:shadow-[0_5px_20px_rgba(66,133,244,0.2)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] transform transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#4285F4] uppercase tracking-wider">Contact</h3>
              <address className="not-italic space-y-3">
                <p className="text-base text-gray-500">
                  <a 
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="group relative inline-block transition-all duration-300 hover:text-[#4285F4]"
                  >
                    <span className="relative inline-block transform transition-all duration-300 group-hover:translate-x-2">
                      {COMPANY_INFO.contact.email}
                    </span>
                  </a>
                </p>
                <p className="text-base text-gray-500">
                  <a 
                    href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="group relative inline-block transition-all duration-300 hover:text-[#4285F4]"
                  >
                    <span className="relative inline-block transform transition-all duration-300 group-hover:translate-x-2">
                      {COMPANY_INFO.contact.phone}
                    </span>
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative mt-20 pt-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-between items-center">
            <span className="text-sm text-gray-400">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </span>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-[#4285F4] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-[#4285F4] transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 