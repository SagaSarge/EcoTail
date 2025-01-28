import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useAppDataStore } from '../../../stores/appDataStore';

const Analytics: React.FC = () => {
  const { wasteData, userStats } = useAppDataStore();

  return (
    <div className="min-h-full p-4 space-y-6">
      {/* Overview Stats */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Waste Analytics</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="text-sm text-gray-400">Total Reduced</div>
            <div className="mt-1 text-2xl font-bold text-blue-400">
              {userStats.wasteReduced}kg
            </div>
            <div className="mt-1 text-xs text-green-400">↑ 12% from last month</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-400">Environmental Impact</div>
            <div className="mt-1 text-2xl font-bold text-emerald-400">
              {(userStats.wasteReduced * 2.5).toFixed(1)}kg
            </div>
            <div className="mt-1 text-xs text-gray-400">CO₂ Saved</div>
          </Card>
        </div>
      </div>

      {/* Waste Breakdown */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Waste Breakdown</h2>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-sm text-gray-300">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
        <div className="space-y-3">
          {wasteData.map((data) => (
            <Card key={data.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{data.type}</h3>
                  <p className="text-sm text-gray-400">{data.date}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{data.amount}kg</div>
                  <div className={`text-sm ${data.trend < 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {data.trend < 0 ? '↓' : '↑'} {Math.abs(data.trend)}%
                  </div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-3 space-y-2">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(data.amount / 5) * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Improvement Tips</h2>
        <Card className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Reduce Plastic Usage</h3>
              <p className="text-sm text-gray-400">Your plastic waste increased by 15% this week</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Great Paper Recycling!</h3>
              <p className="text-sm text-gray-400">You've reduced paper waste by 8%</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics; 