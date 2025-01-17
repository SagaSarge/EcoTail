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
    <footer className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-16 pb-8 overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-primary-600/[0.03] -z-1" />
      <div className="absolute -top-24 -right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="flex items-center space-x-3 transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:shadow-primary-500/50 transition-all duration-300"></div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
                  {COMPANY_INFO.name}
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md backdrop-blur-sm">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map((social) => (
                <div key={social.platform} className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <SocialIcon
                    platform={social.platform}
                    icon={social.icon}
                    url={social.url}
                    className="w-6 h-6 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links - Spans 4 columns */}
          <nav className="lg:col-span-4 relative" aria-label="Footer navigation">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Navigation</h3>
                <ul className="space-y-4">
                  {MAIN_NAVIGATION.slice(0, Math.ceil(MAIN_NAVIGATION.length / 2)).map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className="group text-base text-gray-600 transition-all duration-300 hover:text-primary-600"
                      >
                        <span className="relative inline-block">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Quick Links</h3>
                <ul className="space-y-4">
                  {MAIN_NAVIGATION.slice(Math.ceil(MAIN_NAVIGATION.length / 2)).map((item) => (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className="group text-base text-gray-600 transition-all duration-300 hover:text-primary-600"
                      >
                        <span className="relative inline-block">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      to="/buy-now"
                      className="group text-base text-gray-600 transition-all duration-300 hover:text-primary-600"
                    >
                      <span className="relative inline-block">
                        Buy Now
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/cart"
                      className="group text-base text-gray-600 transition-all duration-300 hover:text-primary-600"
                    >
                      <span className="relative inline-block">
                        Cart
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Newsletter and Contact - Spans 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="max-w-xs transform transition-all duration-300 hover:scale-[1.02]">
                  <label htmlFor="email-input" className="sr-only">Email address</label>
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 text-base text-gray-900 placeholder-gray-500 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full max-w-xs px-4 py-2.5 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg hover:shadow-primary-500/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transform transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact</h3>
              <address className="not-italic space-y-3">
                <p className="text-base text-gray-600">
                  <a 
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="group relative inline-block transition-all duration-300 hover:text-primary-600"
                  >
                    <span className="relative inline-block transform transition-all duration-300 group-hover:translate-x-2">
                      {COMPANY_INFO.contact.email}
                    </span>
                  </a>
                </p>
                <p className="text-base text-gray-600">
                  <a 
                    href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="group relative inline-block transition-all duration-300 hover:text-primary-600"
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
        <div className="relative mt-12 pt-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-sm text-gray-500">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}; 