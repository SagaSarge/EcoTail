import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to loading page after a short delay
    const timer = setTimeout(() => {
      navigate('/auth/loading');
    }, 500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-accent-50 p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-accent-200/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-primary-200/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-md w-full text-center relative z-10">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Demo App
        </h1>
        <p className="text-sm text-gray-600">Loading demo experience...</p>
        <div className="mt-8">
          <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
}; 