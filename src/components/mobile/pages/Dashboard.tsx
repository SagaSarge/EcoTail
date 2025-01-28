import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useAppDataStore } from '../../../stores/appDataStore';

export const Dashboard: React.FC = () => {
  const { userStats, challenges, recommendations } = useAppDataStore();

  return (
    <div className="min-h-full p-4 space-y-6">
      {/* User Stats */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Welcome to EcoTale!</h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400"
          >
            <span className="text-sm font-medium">Rank #{userStats.rank}</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center">
            <div className="text-2xl font-bold text-blue-400">{userStats.points}</div>
            <div className="text-sm text-gray-400">Points Earned</div>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-emerald-400">{userStats.streakDays}</div>
            <div className="text-sm text-gray-400">Day Streak</div>
          </Card>
        </div>
      </div>

      {/* Active Challenge */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Active Challenge</h2>
        <Card className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{challenges[0].title}</h3>
              <p className="text-sm text-gray-400">{challenges[0].description}</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">{challenges[0].points}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Progress</span>
              <span className="text-gray-300">{challenges[0].progress}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${challenges[0].progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card
            onClick={() => {}}
            className="flex flex-col items-center justify-center py-6 text-center"
          >
            <div className="w-12 h-12 mb-2 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="font-medium">Log Waste</span>
          </Card>
          <Card
            onClick={() => {}}
            className="flex flex-col items-center justify-center py-6 text-center"
          >
            <div className="w-12 h-12 mb-2 rounded-full bg-purple-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-medium">View Tips</span>
          </Card>
        </div>
      </div>

      {/* Latest Recommendation */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Smart Recommendation</h2>
          <button className="text-sm text-blue-400">View All</button>
        </div>
        <Card>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{recommendations[0].title}</h3>
              <p className="text-sm text-gray-400">{recommendations[0].description}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">
                  {recommendations[0].difficulty}
                </span>
                <span className="text-xs text-gray-400">
                  {recommendations[0].impact}% Impact
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}; 