import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useAuthStore } from '../../../stores/authStore';
import { useUserStore } from '../../../stores/userStore';

export const Profile: React.FC = () => {
  const { user, logout } = useAuthStore();
  const { profile } = useUserStore();

  return (
    <div className="min-h-screen bg-gray-900 p-4 space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* Profile Header */}
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-2xl text-white">
                    {user?.displayName?.[0] || user?.email?.[0] || '?'}
                  </span>
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">
                {user?.displayName || 'Eco Warrior'}
              </h2>
              <p className="text-gray-400">{user?.email}</p>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Your Impact</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">Total Waste Reduced</p>
              <p className="text-2xl font-bold text-white">
                {profile?.stats.totalWasteReduced || 0}kg
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">Impact Score</p>
              <p className="text-2xl font-bold text-white">
                {profile?.stats.impactScore || 0}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">Challenges Completed</p>
              <p className="text-2xl font-bold text-white">
                {profile?.stats.challengesCompleted || 0}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">Current Streak</p>
              <p className="text-2xl font-bold text-white">
                {profile?.stats.streakDays || 0} days
              </p>
            </div>
          </div>
        </Card>

        {/* Settings */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Settings</h3>
          <div className="space-y-4">
            <button
              className="w-full p-3 rounded-lg bg-gray-800 text-white text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
            >
              <span>Notifications</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="w-full p-3 rounded-lg bg-gray-800 text-white text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
            >
              <span>Privacy</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="w-full p-3 rounded-lg bg-gray-800 text-white text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
            >
              <span>Help & Support</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Card>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="w-full p-4 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </motion.div>
    </div>
  );
}; 