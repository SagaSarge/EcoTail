import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  animate?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  animate = true,
  delay = 0
}) => {
  const content = (
    <div
      className={`
        relative overflow-hidden rounded-2xl bg-gray-800/50 p-4
        hover:bg-gray-800/70 transition-colors backdrop-blur-lg
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      {content}
    </motion.div>
  );
}; 