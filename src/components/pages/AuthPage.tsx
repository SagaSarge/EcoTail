import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to EcoTale
          </h1>
          <p className="text-lg text-gray-600">
            Please sign in or create an account to continue
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/auth/signin')}
            className="w-full py-4 px-6 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 text-lg font-semibold"
          >
            Sign In
          </button>
          
          <button
            onClick={() => navigate('/auth/register')}
            className="w-full py-4 px-6 bg-white text-primary-600 border-2 border-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-200 text-lg font-semibold"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}; 