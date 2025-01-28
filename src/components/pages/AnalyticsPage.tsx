import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const AnalyticsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
          Analytics
        </h1>
        <p className="text-zinc-300 mb-8">Track your environmental impact</p>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card variant="light" className="p-4 group">
            <h3 className="text-sm text-zinc-300">Monthly Impact</h3>
            <p className="text-2xl font-bold text-white group-hover:text-white/90">245 kg</p>
            <p className="text-sm text-emerald-300">↑ 12% from last month</p>
          </Card>
          <Card variant="light" className="p-4 group">
            <h3 className="text-sm text-zinc-300">Recycling Rate</h3>
            <p className="text-2xl font-bold text-white group-hover:text-white/90">78%</p>
            <p className="text-sm text-emerald-300">↑ 5% from last month</p>
          </Card>
        </div>

        {/* Placeholder for Charts */}
        <Card variant="light" className="p-6 mb-8 group">
          <h3 className="text-lg font-semibold mb-4 text-white group-hover:text-white/90">Waste Reduction Trend</h3>
          <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center text-zinc-300">
            Chart Placeholder
          </div>
        </Card>

        {/* Categories */}
        <h2 className="text-xl font-semibold mb-4 text-white">Waste Categories</h2>
        <div className="space-y-4">
          <Card variant="light" className="p-4 group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white group-hover:text-white/90">Plastic</h3>
                <p className="text-sm text-zinc-300">32% of total waste</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-2xl transform group-hover:scale-105 transition-transform">
                ♳
              </div>
            </div>
            <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[32%] bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full" />
            </div>
          </Card>

          <Card variant="light" className="p-4 group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white group-hover:text-white/90">Paper</h3>
                <p className="text-sm text-zinc-300">28% of total waste</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-2xl transform group-hover:scale-105 transition-transform">
                📄
              </div>
            </div>
            <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[28%] bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full" />
            </div>
          </Card>

          <Card variant="light" className="p-4 group">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white group-hover:text-white/90">Organic</h3>
                <p className="text-sm text-zinc-300">40% of total waste</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-2xl transform group-hover:scale-105 transition-transform">
                🥬
              </div>
            </div>
            <div className="mt-2 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[40%] bg-gradient-to-r from-emerald-400 to-green-300 rounded-full" />
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}; 