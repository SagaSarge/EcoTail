import React from 'react';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'dark',
  ...props 
}) => {
  const baseClasses = 'rounded-lg backdrop-blur transition-all duration-300';
  const variantClasses = variant === 'dark' 
    ? 'bg-zinc-800/50 hover:bg-zinc-800/70' 
    : 'bg-white/10 hover:bg-white/20 border border-white/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}; 