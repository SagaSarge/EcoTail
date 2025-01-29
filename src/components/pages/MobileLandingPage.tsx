import React from 'react';
import { motion } from 'framer-motion';
import { useAnalytics } from '../../hooks/useAnalytics';
import { Link } from 'react-router-dom';

export const MobileLandingPage: React.FC = () => {
  const { trackEvent } = useAnalytics();

  const handleAppStoreClick = () => {
    trackEvent({
      action: 'click',
      category: 'download',
      label: 'app_store'
    });
  };

  const handlePlayStoreClick = () => {
    trackEvent({
      action: 'click',
      category: 'download',
      label: 'play_store'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-4 right-6 z-20">
        <button className="relative px-4 py-2 bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border-2 border-t-orange-300 border-l-orange-300 border-r-orange-600 border-b-orange-700 font-medium text-white transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150 group">
          <span className="relative z-10 flex items-center justify-center text-sm">
            Mobile App
          </span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        </button>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/30 pointer-events-none" />

      {/* Hero Section */}
      <div className="relative px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            EcoTale Mobile
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Transform your waste management journey with AI-powered insights and real-time tracking
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={handleAppStoreClick}
              className="relative px-8 py-3 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border-2 border-t-white border-l-white border-r-black/10 border-b-black/20 font-medium text-gray-800 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-lg">🍎</span>
                App Store
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={handlePlayStoreClick}
              className="relative px-8 py-3 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border-2 border-t-white border-l-white border-r-black/10 border-b-black/20 font-medium text-gray-800 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-lg">🤖</span>
                Play Store
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 px-4 py-4 bg-white/80 backdrop-blur shadow-lg border-t border-b border-gray-200"
      >
        <div className="flex justify-between items-center max-w-md mx-auto">
          <Link 
            to="/mobile/dashboard"
            className="flex flex-col items-center group relative"
          >
            <div className="relative p-2.5 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border-2 border-t-white border-l-white border-r-black/5 border-b-black/10 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-xl text-gray-700 group-hover:scale-105 transition-transform">📊</span>
            </div>
            <span className="mt-1 text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Dashboard</span>
          </Link>
          
          <Link 
            to="/mobile/analytics"
            className="flex flex-col items-center group relative"
          >
            <div className="relative p-2.5 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border-2 border-t-white border-l-white border-r-black/5 border-b-black/10 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-xl text-gray-700 group-hover:scale-105 transition-transform">📈</span>
            </div>
            <span className="mt-1 text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Analytics</span>
          </Link>
          
          <Link 
            to="/mobile/gamification"
            className="flex flex-col items-center group relative"
          >
            <div className="relative p-2.5 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border-2 border-t-white border-l-white border-r-black/5 border-b-black/10 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-xl text-gray-700 group-hover:scale-105 transition-transform">🏆</span>
            </div>
            <span className="mt-1 text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Rewards</span>
          </Link>
          
          <Link 
            to="/mobile/recommendations"
            className="flex flex-col items-center group relative"
          >
            <div className="relative p-2.5 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border-2 border-t-white border-l-white border-r-black/5 border-b-black/10 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-xl text-gray-700 group-hover:scale-105 transition-transform">💡</span>
            </div>
            <span className="mt-1 text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Smart AI</span>
          </Link>
          
          <Link 
            to="/mobile/community"
            className="flex flex-col items-center group relative"
          >
            <div className="relative p-2.5 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border-2 border-t-white border-l-white border-r-black/5 border-b-black/10 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-150">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-xl text-gray-700 group-hover:scale-105 transition-transform">👥</span>
            </div>
            <span className="mt-1 text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Community</span>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-900">
            Core Features
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Discover a smarter way to manage waste and make a lasting impact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group p-6 rounded-xl bg-white shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 hover:shadow-2xl backdrop-blur border border-gray-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center text-2xl shadow-inner transform group-hover:scale-110 transition-transform">
                  📊
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Smart Analytics</h3>
              </div>
              <p className="text-gray-600">
                Track your environmental impact with precision. Our AI analyzes your waste patterns and provides real-time insights.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group p-6 rounded-xl bg-white shadow-lg shadow-amber-500/5 hover:shadow-amber-500/10 hover:shadow-2xl backdrop-blur border border-gray-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-50 to-yellow-50 flex items-center justify-center text-2xl shadow-inner transform group-hover:scale-110 transition-transform">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Green Rewards</h3>
              </div>
              <p className="text-gray-600">
                Turn your eco-friendly actions into rewards. Compete in challenges and earn points while making a difference.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group p-6 rounded-xl bg-white shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/10 hover:shadow-2xl backdrop-blur border border-gray-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 flex items-center justify-center text-2xl shadow-inner transform group-hover:scale-110 transition-transform">
                  💡
                </div>
                <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
              </div>
              <p className="text-gray-600">
                Get AI-powered recommendations tailored to your lifestyle for maximum environmental impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group p-6 rounded-xl bg-white shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 hover:shadow-2xl backdrop-blur border border-gray-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 flex items-center justify-center text-2xl shadow-inner transform group-hover:scale-110 transition-transform">
                  👥
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Community Impact</h3>
              </div>
              <p className="text-gray-600">
                Join a growing community of eco-conscious individuals. Share achievements and amplify your impact together.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}; 