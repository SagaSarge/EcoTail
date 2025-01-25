import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const BlogPostPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-24"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Blog Post Coming Soon</h2>
        <p className="text-gray-600 mb-8">
          We're currently working on creating amazing content for you. Please check back later!
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-[#4285F4] text-white rounded-lg hover:bg-[#4285F4]/90 transition-colors duration-200"
          >
            Back to Home
          </button>
          <button 
            onClick={() => navigate('/blog')}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Back to Blog
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage; 