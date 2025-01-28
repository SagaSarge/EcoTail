import React from 'react';
import { motion } from 'framer-motion';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Phone Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl"
      >
        {/* iPhone-style notch */}
        <div className="absolute top-0 inset-x-0">
          <div className="mx-auto bg-gray-800 rounded-b-[1.5rem] w-[150px] h-[20px]">
            <div className="flex justify-center items-center h-full space-x-2">
              <div className="w-[10px] h-[10px] bg-gray-700 rounded-full"></div>
              <div className="w-[40px] h-[4px] bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white dark:bg-gray-900">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-[4px] bg-gray-700 rounded-full"></div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute -z-10 inset-0 transform translate-y-1/4"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-purple-500/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl"></div>
      </motion.div>
    </div>
  );
}; 