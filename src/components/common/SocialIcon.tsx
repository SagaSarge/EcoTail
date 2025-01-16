import React from 'react';

interface SocialIconProps {
  platform: string;
  icon: string;
  url: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ platform, icon, url, className = '' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-600 hover:text-primary-600 transition-colors duration-200 ${className}`}
      aria-label={`Follow us on ${platform}`}
    >
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d={icon} />
      </svg>
    </a>
  );
}; 