import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <span className="text-sm text-gray-500">
            © {currentYear} EcoTale. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}; 