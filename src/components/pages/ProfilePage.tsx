import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
  progress: number;
}

export const ProfilePage: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Waste Warrior',
      description: 'Reduced waste by 50% in one month',
      icon: '🏆',
      date: 'June 15, 2024',
      progress: 100
    },
    {
      id: '2',
      title: 'Recycling Master',
      description: 'Correctly sorted 500 items',
      icon: '♻️',
      date: 'May 30, 2024',
      progress: 85
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6"
    >
      {/* Profile Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-zinc-700 relative">
          <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-green-500 border-2 border-zinc-900" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Alex Thompson</h1>
          <p className="text-zinc-400">Level 12 • Eco Warrior</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card className="p-4 bg-zinc-800/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Total Impact</p>
              <p className="text-2xl font-bold">2,450 kg</p>
            </div>
            <span className="text-2xl">🌍</span>
          </div>
        </Card>
        <Card className="p-4 bg-zinc-800/50 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Weekly Streak</p>
              <p className="text-2xl font-bold">14 days</p>
            </div>
            <span className="text-2xl">🔥</span>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="p-4 rounded-lg bg-zinc-800/50 backdrop-blur hover:bg-zinc-700/50 transition-colors">
          <span className="text-xl mb-2 block">⚙️</span>
          <span className="text-sm">Settings</span>
        </button>
        <button className="p-4 rounded-lg bg-zinc-800/50 backdrop-blur hover:bg-zinc-700/50 transition-colors">
          <span className="text-xl mb-2 block">🔒</span>
          <span className="text-sm">Privacy</span>
        </button>
        <button className="p-4 rounded-lg bg-zinc-800/50 backdrop-blur hover:bg-zinc-700/50 transition-colors">
          <span className="text-xl mb-2 block">❓</span>
          <span className="text-sm">Help</span>
        </button>
        <button className="p-4 rounded-lg bg-zinc-800/50 backdrop-blur hover:bg-zinc-700/50 transition-colors">
          <span className="text-xl mb-2 block">📱</span>
          <span className="text-sm">App Info</span>
        </button>
      </div>

      {/* Achievements */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="p-4 bg-zinc-800/50 backdrop-blur">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{achievement.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-zinc-400">{achievement.description}</p>
                  <div className="mt-2 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-zinc-400">{achievement.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Account Settings */}
      <div className="space-y-4">
        <button className="w-full p-4 rounded-lg bg-zinc-800/50 backdrop-blur hover:bg-zinc-700/50 transition-colors text-left">
          Edit Profile
        </button>
        <button className="w-full p-4 rounded-lg bg-zinc-800/50 backdrop-blur hover:bg-zinc-700/50 transition-colors text-left">
          Notifications
        </button>
        <button className="w-full p-4 rounded-lg bg-zinc-800/50 backdrop-blur hover:bg-red-900/30 transition-colors text-left text-red-400">
          Sign Out
        </button>
      </div>
    </motion.div>
  );
}; 