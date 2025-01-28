import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  color,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${color}`}
        style={{ opacity: 0.1 }}
      />

      {/* Icon */}
      <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${color} p-3`}>
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {getIconPath(icon)}
        </svg>
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-300 group-hover:text-white/70 transition-colors">
        {description}
      </p>

      {/* Hover Effect */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
};

function getIconPath(icon: string): JSX.Element {
  switch (icon) {
    case 'chart-bar':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      );
    case 'trophy':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v2a2 2 0 002 2h8a2 2 0 002-2v-2M18 3v4m2-2h-4m-4-2v2a2 2 0 01-2 2H8a2 2 0 01-2-2V3m18 0v2a2 2 0 01-2 2h-3a2 2 0 01-2-2V3"
        />
      );
    case 'lightbulb':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      );
    case 'users':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      );
    default:
      return <path />;
  }
} 