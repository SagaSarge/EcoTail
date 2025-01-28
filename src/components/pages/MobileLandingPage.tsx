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
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Hero Section */}
      <div className="relative px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            EcoTale Mobile
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            Transform your waste management journey with AI-powered insights and real-time tracking
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={handleAppStoreClick}
              className="px-8 py-3 rounded-lg bg-zinc-800/50 backdrop-blur border border-zinc-700/50 hover:bg-zinc-700/50 transition-all duration-300 text-white"
            >
              App Store
            </button>
            <button
              onClick={handlePlayStoreClick}
              className="px-8 py-3 rounded-lg bg-zinc-800/50 backdrop-blur border border-zinc-700/50 hover:bg-zinc-700/50 transition-all duration-300 text-white"
            >
              Play Store
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 px-4 py-4 bg-zinc-900/90 backdrop-blur border-t border-b border-zinc-800/50"
      >
        <div className="flex justify-between items-center max-w-md mx-auto">
          <Link 
            to="/mobile/dashboard"
            className="flex flex-col items-center group"
          >
            <div className="relative p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
              <span className="relative text-xl text-blue-400 group-hover:text-blue-300">📊</span>
            </div>
            <span className="mt-1 text-xs text-zinc-400 group-hover:text-zinc-300">Dashboard</span>
          </Link>
          
          <Link 
            to="/mobile/analytics"
            className="flex flex-col items-center group"
          >
            <div className="relative p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
              <span className="relative text-xl text-purple-400 group-hover:text-purple-300">📈</span>
            </div>
            <span className="mt-1 text-xs text-zinc-400 group-hover:text-zinc-300">Analytics</span>
          </Link>
          
          <Link 
            to="/mobile/gamification"
            className="flex flex-col items-center group"
          >
            <div className="relative p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
              <span className="relative text-xl text-amber-400 group-hover:text-amber-300">🏆</span>
            </div>
            <span className="mt-1 text-xs text-zinc-400 group-hover:text-zinc-300">Rewards</span>
          </Link>
          
          <Link 
            to="/mobile/recommendations"
            className="flex flex-col items-center group"
          >
            <div className="relative p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
              <span className="relative text-xl text-emerald-400 group-hover:text-emerald-300">💡</span>
            </div>
            <span className="mt-1 text-xs text-zinc-400 group-hover:text-zinc-300">Smart AI</span>
          </Link>
          
          <Link 
            to="/mobile/community"
            className="flex flex-col items-center group"
          >
            <div className="relative p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
              <span className="relative text-xl text-green-400 group-hover:text-green-300">👥</span>
            </div>
            <span className="mt-1 text-xs text-zinc-400 group-hover:text-zinc-300">Community</span>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Core Features</h2>
          <p className="text-zinc-400 mb-10">
            Discover a smarter way to manage waste and make a lasting impact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur border border-zinc-700/50 hover:bg-zinc-700/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Smart Analytics</h3>
              <p className="text-zinc-400">
                Track your environmental impact with precision. Our AI analyzes your waste patterns and provides real-time insights.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur border border-zinc-700/50 hover:bg-zinc-700/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Green Rewards</h3>
              <p className="text-zinc-400">
                Turn your eco-friendly actions into rewards. Compete in challenges and earn points while making a difference.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur border border-zinc-700/50 hover:bg-zinc-700/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">AI Recommendations</h3>
              <p className="text-zinc-400">
                Get AI-powered recommendations tailored to your lifestyle for maximum environmental impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur border border-zinc-700/50 hover:bg-zinc-700/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Community Impact</h3>
              <p className="text-zinc-400">
                Join a growing community of eco-conscious individuals. Share achievements and amplify your impact together.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}; 