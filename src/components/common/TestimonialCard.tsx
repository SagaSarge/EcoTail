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
  verified?: boolean;
  impact?: {
    wasteReduced: string;
    costSaved: string;
  };
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  avatar,
  stats,
  verified,
  impact
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-[320px] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0 relative">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-lg font-bold text-primary-600">{avatar}</span>
          </div>
          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-primary-500 rounded-full p-1">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900 truncate">{name}</h3>
          </div>
          <p className="text-sm text-gray-500 mb-2">{role}</p>
          <p className="text-sm text-gray-700 line-clamp-4">{content}</p>
        </div>
      </div>

      {/* Impact Metrics */}
      {impact && (
        <div className="mt-4 grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-xl">
          <div>
            <div className="text-sm font-medium text-gray-500">Waste Reduced</div>
            <div className="text-base font-semibold text-primary-600">{impact.wasteReduced}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">Cost Saved</div>
            <div className="text-base font-semibold text-green-600">{impact.costSaved}</div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-1">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">{stats.likes.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          <span className="text-sm text-gray-600">{stats.shares.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}; 