import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">About</h3>
            <p className="text-gray-600">
              EcoTail - Making sustainable choices easier for everyone.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: info@ecotail.com</li>
              <li className="text-gray-600">Phone: (555) 123-4567</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} EcoTail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 