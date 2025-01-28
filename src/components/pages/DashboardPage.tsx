import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Welcome Back!
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm backdrop-blur-sm">
              Level 12
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">2,450 Points</span>
          </div>
        </motion.div>

        {/* Daily Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Today's Progress</h2>
              <span className="text-gray-300">75%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-400 text-sm">Steps</p>
                <p className="text-white font-bold">7,532</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Waste Reduced</p>
                <p className="text-white font-bold">1.2kg</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Points</p>
                <p className="text-white font-bold">150</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-6 mb-12"
        >
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/5">
                <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Weekly Streak</p>
                <p className="text-white font-bold text-xl">14 Days</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/5">
                <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active Time</p>
                <p className="text-white font-bold text-xl">2.5 Hours</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Recent Activities</h2>
          <div className="space-y-4">
            {[
              {
                action: 'Logged recycling',
                detail: 'Recycled 0.5kg of plastic bottles',
                time: '2 hours ago',
                points: '+25'
              },
              {
                action: 'Completed challenge',
                detail: 'Zero Waste Day Challenge',
                time: '5 hours ago',
                points: '+100'
              },
              {
                action: 'Shared tip',
                detail: 'How to start composting at home',
                time: 'Yesterday',
                points: '+15'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="p-4 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">{activity.action}</h3>
                      <p className="text-gray-400 text-sm">{activity.detail}</p>
                      <span className="text-gray-500 text-xs">{activity.time}</span>
                    </div>
                    <span className="text-gray-300 font-medium">{activity.points}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'Log Activity', icon: 'M12 4v16m8-8H4' },
              { name: 'View Stats', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              { name: 'Challenges', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
            ].map((action, index) => (
              <motion.button
                key={action.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 rounded-xl bg-zinc-900/50 backdrop-blur-lg border border-white/10 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    {action.name}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 