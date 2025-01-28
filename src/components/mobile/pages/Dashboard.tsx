import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useUserStore } from '../../../stores/userStore';
import { cn } from '../../../utils/classNames';

const Dashboard: React.FC = () => {
  const { profile } = useUserStore();

  return (
    <div className="min-h-screen bg-[#111827] bg-gradient-to-b from-[#1E293B] to-[#111827]">
      {/* Status Bar - Refined with premium styling */}
      <div className="px-6 py-3 flex items-center justify-between bg-gradient-to-r from-[#1E293B]/80 to-[#111827]/80 backdrop-blur-xl border-b border-white/5">
        <div className="text-[#E5E7EB] text-sm font-medium tracking-wide">9:41</div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" className="text-[#E5E7EB]">
              <path d="M18 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="currentColor"/>
              <path d="M18 6v12M6 18v-3M12 18V9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" fill="none" className="text-[#E5E7EB]">
              <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 15a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pt-8 space-y-10">
        {/* Welcome & Rank - More refined typography */}
        <div className="space-y-2">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-light text-[#F3F4F6] tracking-wide"
          >
            Welcome to EcoTale
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-3"
          >
            <span className="text-[#94A3B8] text-sm font-medium tracking-wide">RANK</span>
            <span className="px-3 py-1 rounded-full bg-[#E5E7EB]/5 text-[#E5E7EB] text-sm font-medium tracking-wider border border-white/5">
              156
            </span>
          </motion.div>
        </div>

        {/* Stats Cards - Premium glass morphism */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg">
              <div className="space-y-2">
                <div className="text-4xl font-light text-white tracking-tight">2,750</div>
                <div className="text-sm text-[#94A3B8] tracking-wide uppercase">
                  Points Earned
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg">
              <div className="space-y-2">
                <div className="text-4xl font-light text-white tracking-tight">0</div>
                <div className="text-sm text-[#94A3B8] tracking-wide uppercase">
                  Day Streak
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Active Challenge - Elegant card design */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-lg font-medium text-[#E5E7EB] tracking-wide">Active Challenge</h2>
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-light text-white tracking-wide">Zero Waste Week</h3>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-[#FBBF24] font-medium tracking-wider">500</span>
                </div>
              </div>
              <p className="text-[#94A3B8] tracking-wide">Reduce your waste to zero for a week</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm tracking-wide">
                  <span className="text-[#94A3B8] uppercase">Progress</span>
                  <span className="text-white font-medium">65%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-gradient-to-r from-[#E5E7EB] to-white rounded-full"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions - Refined button design */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4 pb-8"
        >
          <h2 className="text-lg font-medium text-[#E5E7EB] tracking-wide">Quick Actions</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { name: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              { name: 'Rewards', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { name: 'Social', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' }
            ].map((action, index) => (
              <motion.button
                key={action.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 hover:from-white/15 hover:to-white/10"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-6 h-6 text-white/80 transition-colors duration-300 group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={action.icon} />
                    </svg>
                  </div>
                  <span className="text-xs text-[#94A3B8] tracking-wide uppercase group-hover:text-white/80 transition-colors duration-300">
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

export { Dashboard };
export default Dashboard; 