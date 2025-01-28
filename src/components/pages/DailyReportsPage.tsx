import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const DailyReportsPage: React.FC = () => {
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
            Daily Activity Report
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Track your daily progress and environmental impact
          </p>
        </motion.div>

        {/* Today's Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-gray-300 font-medium mb-2">Waste Reduced</h3>
                <p className="text-3xl font-bold text-white">1.2kg</p>
                <p className="text-gray-400 text-sm mt-1">+0.3kg from yesterday</p>
              </div>
              <div className="text-center">
                <h3 className="text-gray-300 font-medium mb-2">Points Earned</h3>
                <p className="text-3xl font-bold text-white">150</p>
                <p className="text-gray-400 text-sm mt-1">Daily Goal: 200</p>
              </div>
              <div className="text-center">
                <h3 className="text-gray-300 font-medium mb-2">Actions Taken</h3>
                <p className="text-3xl font-bold text-white">8</p>
                <p className="text-gray-400 text-sm mt-1">Personal Best: 12</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Today's Timeline</h2>
          <div className="space-y-4">
            {[
              {
                time: '09:30 AM',
                action: 'Logged Recycling',
                detail: 'Recycled 0.5kg of plastic bottles',
                impact: '+25 points'
              },
              {
                time: '11:45 AM',
                action: 'Used Reusable Bag',
                detail: 'Grocery shopping with eco-friendly bags',
                impact: '+15 points'
              },
              {
                time: '02:15 PM',
                action: 'Composted Food Waste',
                detail: 'Added kitchen scraps to compost bin',
                impact: '+20 points'
              },
              {
                time: '04:30 PM',
                action: 'Shared Eco Tip',
                detail: 'Posted about reducing paper waste',
                impact: '+15 points'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-4 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="min-w-[80px] text-gray-400 text-sm">
                      {activity.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{activity.action}</h3>
                      <p className="text-gray-400 text-sm">{activity.detail}</p>
                    </div>
                    <div className="text-gray-300 font-medium">
                      {activity.impact}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Waste Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Waste Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: 'Plastic',
                amount: '0.5kg',
                percentage: 40,
                icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              },
              {
                category: 'Paper',
                amount: '0.3kg',
                percentage: 25,
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              }
            ].map((waste, index) => (
              <motion.div
                key={waste.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/5">
                      <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={waste.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-medium">{waste.category}</h3>
                        <span className="text-gray-300">{waste.amount}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${waste.percentage}%` }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Today's Tips</h2>
          <Card className="p-6 bg-zinc-900/50 backdrop-blur-lg border border-white/10">
            <div className="space-y-4">
              {[
                'Try using a reusable water bottle instead of plastic bottles',
                'Consider starting a small compost bin for food scraps',
                'Switch to digital receipts when possible'
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1">
                    <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-400">{tip}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}; 