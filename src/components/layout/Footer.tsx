import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_NAVIGATION, SOCIAL_LINKS, COMPANY_INFO } from '../../constants/navigation';
import { SocialIcon } from '../common/SocialIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-lg mt-auto" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">About</h3>
            <div className="space-y-3">
              <Link to="/" className="inline-block">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary-600"></div>
                  <span className="text-xl font-bold text-primary-600">{COMPANY_INFO.name}</span>
                </div>
              </Link>
              <p className="text-gray-600">{COMPANY_INFO.tagline}</p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Footer navigation">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {MAIN_NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200 inline-block py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <address className="not-italic space-y-2">
              <p className="text-gray-600">
                <span className="block font-medium">Email:</span>
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-primary-600 transition-colors duration-200"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </p>
              <p className="text-gray-600">
                <span className="block font-medium">Phone:</span>
                <a 
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-primary-600 transition-colors duration-200"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </p>
              <p className="text-gray-600">
                <span className="block font-medium">Address:</span>
                {COMPANY_INFO.contact.address}
              </p>
            </address>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon
                  key={social.platform}
                  platform={social.platform}
                  icon={social.icon}
                  url={social.url}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 