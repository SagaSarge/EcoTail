import React, { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  children,
  className = ''
}) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-[80vh] flex items-start justify-center pt-52">
        <div className={`text-center px-4 sm:px-6 lg:px-8 max-w-3xl ${className}`}>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {title.split(' ').map((word, index, array) => (
              <span 
                key={index} 
                className={`block ${
                  index === array.length - 1 ? 'text-primary-600 mb-4' : 'mb-2'
                }`}
              >
                {word}
              </span>
            ))}
          </h1>
          
          <p className="mt-3 text-xl text-gray-500 sm:text-2xl md:text-3xl font-medium">
            {subtitle}
          </p>
          
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 