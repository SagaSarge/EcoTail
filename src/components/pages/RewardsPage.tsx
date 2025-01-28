import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const RewardsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Rewards & Achievements
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Track your progress and unlock rewards for your eco-friendly actions
          </p>
        </motion.div>

        {/* Points Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">2,450 Points</h2>
                <p className="text-gray-400">Level 12 - Eco Warrior</p>
              </div>
              <div className="flex-1 max-w-md">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress to Level 13</span>
                  <span className="text-white">2,450 / 3,000 XP</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '82%' }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Recent Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Recent Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Waste Warrior', icon: '🏆', date: '2 days ago' },
              { name: 'Green Pioneer', icon: '🌱', date: '1 week ago' },
              { name: 'Eco Champion', icon: '🌍', date: '2 weeks ago' },
              { name: 'Recycling Master', icon: '♻️', date: '1 month ago' }
            ].map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10 text-center hover:bg-white/5 transition-all duration-300 cursor-pointer group">
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <h3 className="text-white font-medium mb-1 group-hover:text-gray-200 transition-colors duration-300">
                    {badge.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{badge.date}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Active Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Zero Waste Week',
                description: 'Complete 7 days without producing landfill waste',
                progress: 75,
                reward: '500 XP',
                timeLeft: '2 days'
              },
              {
                title: 'Community Leader',
                description: 'Share 5 eco-tips with the community',
                progress: 60,
                reward: '300 XP',
                timeLeft: '4 days'
              }
            ].map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white font-medium mb-1">{challenge.title}</h3>
                      <p className="text-gray-400 text-sm">{challenge.description}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm">
                      {challenge.reward}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white">{challenge.progress}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${challenge.progress}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full"
                      />
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      {challenge.timeLeft} remaining
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Points History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Points History</h2>
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="space-y-4">
              {[
                { action: 'Completed Challenge', points: '+500', date: 'Today' },
                { action: 'Logged Recycling', points: '+50', date: 'Yesterday' },
                { action: 'Shared Eco-Tip', points: '+25', date: '2 days ago' },
                { action: 'Daily Streak Bonus', points: '+100', date: '3 days ago' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <div>
                    <h3 className="text-white font-medium">{item.action}</h3>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                  <span className="text-gray-300 font-medium">{item.points}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}; 