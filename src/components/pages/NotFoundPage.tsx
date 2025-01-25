import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#4285F4] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Button
            variant="primary"
            className="px-8 py-3"
            onClick={() => navigate('/')}
          >
            Return Home
          </Button>
          <div>
            <button
              onClick={() => navigate(-1)}
              className="text-[#4285F4] hover:text-[#3367D6] transition-colors duration-300 mt-4 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 