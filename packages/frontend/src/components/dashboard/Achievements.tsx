import React from 'react';

interface AchievementProps {}

export const Achievements: React.FC<AchievementProps> = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Achievements
      </h2>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <div className="text-green-500 text-2xl mb-1">🌱</div>
          <div className="text-sm font-medium text-gray-700">Eco Warrior</div>
          <div className="text-xs text-gray-500">Level 3</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <div className="text-blue-500 text-2xl mb-1">♻️</div>
          <div className="text-sm font-medium text-gray-700">Recycling Pro</div>
          <div className="text-xs text-gray-500">Level 2</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <div className="text-yellow-500 text-2xl mb-1">⭐</div>
          <div className="text-sm font-medium text-gray-700">Goal Setter</div>
          <div className="text-xs text-gray-500">Level 1</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <div className="text-purple-500 text-2xl mb-1">🏆</div>
          <div className="text-sm font-medium text-gray-700">Community Hero</div>
          <div className="text-xs text-gray-500">Level 2</div>
        </div>
      </div>
    </div>
  );
}; 