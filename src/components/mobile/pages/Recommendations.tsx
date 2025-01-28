import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useAppDataStore } from '../../../stores/appDataStore';

const Recommendations: React.FC = () => {
  const { wasteData, userStats, recommendations } = useAppDataStore();

  return (
    <div className="min-h-full p-4 space-y-6">
      {/* AI Insights */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Smart Insights</h2>
            <p className="text-sm text-gray-400">AI-powered recommendations based on your habits</p>
          </div>
        </div>

        {/* Weekly Summary */}
        <Card className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Weekly Analysis</h3>
            <span className="text-sm text-gray-400">Last 7 days</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-sm text-gray-400">Waste Reduction</div>
              <div className="text-2xl font-bold text-green-400">
                {userStats.weeklyReduction}%
              </div>
            </div>
            <div className="w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="10"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="10"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: userStats.weeklyReduction / 100 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ transformOrigin: "50% 50%", rotate: "-90deg" }}
                />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* Personalized Tips */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Personalized Tips</h2>
        <div className="space-y-4">
          <Card className="p-4 border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Shopping Habits</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Based on your recent purchases, switching to bulk buying for these 3 items could reduce your plastic waste by 30%
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Food Waste Prevention</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Your food waste peaks on weekends. Try meal planning for Saturday and Sunday to reduce waste.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Smart Goals */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Smart Goals</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Weekly Goal</h3>
                <p className="text-sm text-gray-400">Reduce plastic by 2kg</p>
                <div className="mt-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 1 }}
                    className="h-full bg-green-500"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Monthly Target</h3>
                <p className="text-sm text-gray-400">Save 20kg CO₂</p>
                <div className="mt-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '45%' }}
                    transition={{ duration: 1 }}
                    className="h-full bg-yellow-500"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Recommendations; 