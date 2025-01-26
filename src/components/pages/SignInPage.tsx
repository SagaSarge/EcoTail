import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to loading page after a short delay
    const timer = setTimeout(() => {
      navigate('/auth/loading');
    }, 500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-primary-600 rounded-2xl mx-auto mb-4 transform rotate-45 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-700 -rotate-45" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Demo App</h1>
        <p className="text-gray-600">Loading demo experience...</p>
        <div className="mt-8">
          <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
}; 