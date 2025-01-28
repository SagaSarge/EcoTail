import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useUserStore } from '../../../stores/userStore';
import { cn } from '../../../utils/classNames';

const Dashboard: React.FC = () => {
  const { profile, challenges } = useUserStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 space-y-6">
      {/* Status Bar */}
      <div className="flex items-center justify-between">
        <div className="text-white text-sm">9:41</div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M18 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="currentColor"/>
              <path d="M18 6v12M6 18v-3M12 18V9" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 15a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white"
        >
          Welcome to EcoTale!
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-2"
        >
          <span className="text-green-400 text-sm font-medium">Rank</span>
          <span className="px-2 py-1 rounded-full bg-green-400/10 text-green-400 text-sm font-medium">
            #{profile?.stats?.rank || '156'}
          </span>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/10">
            <div className="space-y-1">
              <span className="text-3xl font-bold text-white">
                {profile?.stats?.points || '2750'}
              </span>
              <p className="text-sm text-gray-400">Points Earned</p>
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/10">
            <div className="space-y-1">
              <span className="text-3xl font-bold text-white">
                {profile?.stats?.streakDays || '0'}
              </span>
              <p className="text-sm text-gray-400">Day Streak</p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Active Challenge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg font-semibold text-white mb-3">Active Challenge</h2>
        <Card className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium">Zero Waste Week</h3>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-yellow-400 font-medium">500</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">Reduce your waste to zero for a week</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Progress</span>
                <span className="text-white">65%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-lg font-semibold text-white mb-3">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-4">
          {['Home', 'Analytics', 'Rewards', 'Social'].map((action, index) => (
            <motion.button
              key={action}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={cn(
                "p-3 rounded-xl flex flex-col items-center justify-center space-y-2",
                "bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700",
                "hover:from-gray-700 hover:to-gray-800 transition-colors"
              )}
            >
              <div className="w-6 h-6 text-blue-400">
                {/* Icon placeholder - replace with actual icons */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={
                      action === 'Home' ? "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" :
                      action === 'Analytics' ? "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" :
                      action === 'Rewards' ? "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" :
                      "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    }
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-400">{action}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export { Dashboard };
export default Dashboard; 