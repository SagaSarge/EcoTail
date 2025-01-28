import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useAppDataStore } from '../../../stores/appDataStore';

const Profile: React.FC = () => {
  const { userProfile, achievements } = useAppDataStore();

  return (
    <div className="min-h-full">
      {/* Profile Header */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500">
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-gray-900 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-4xl font-bold">
              {userProfile.name.charAt(0)}
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-green-500 border-4 border-gray-900 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-20 px-4 text-center">
        <h1 className="text-2xl font-bold">{userProfile.name}</h1>
        <p className="text-gray-400">{userProfile.bio}</p>
        <div className="mt-4 flex justify-center gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
            Level {userProfile.level}
          </span>
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
            {userProfile.points} Points
          </span>
        </div>
      </div>

      {/* Profile Content */}
      <div className="mt-8 px-4 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
          <button className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm text-gray-300">Settings</span>
          </button>
          <button className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-sm text-gray-300">Privacy</span>
          </button>
          <button className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-gray-300">Help</span>
          </button>
        </div>

        {/* Achievements */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Achievements</h2>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="p-4">
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-full bg-${achievement.color}-500/20 flex items-center justify-center`}>
                    <svg className={`w-6 h-6 text-${achievement.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={achievement.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                  </div>
                  {achievement.progress < 100 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-gray-300">{achievement.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${achievement.progress}%` }}
                          transition={{ duration: 1 }}
                          className={`h-full bg-${achievement.color}-500`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Account Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Account Settings</h2>
          <Card className="divide-y divide-gray-800">
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Edit Profile</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span>Notifications</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="text-red-400">Sign Out</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile; 