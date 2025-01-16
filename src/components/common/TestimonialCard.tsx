import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  stats: {
    likes: number;
    shares: number;
  };
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  avatar,
  stats
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 w-[280px] hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-lg font-bold text-primary-600">{avatar}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-sm text-gray-500 mb-2">{role}</p>
          <p className="text-sm text-gray-700 line-clamp-4">{content}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-1">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">{stats.likes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          <span className="text-sm text-gray-600">{stats.shares}</span>
        </div>
      </div>
    </div>
  );
}; 