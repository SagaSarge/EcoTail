import React from 'react';
import { useNavigate } from 'react-router-dom';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  Welcome Back!
                </div>
                <div className="text-sm text-gray-600">Your Eco Journey Dashboard</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 bg-green-100 rounded-lg text-green-600 text-sm font-medium">
                Level 5 • Top 5%
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Items Recycled */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-600 mb-2">Total Items Recycled</div>
              <div className="text-3xl font-bold text-gray-900">1,234</div>
              <div className="mt-2 text-sm text-green-600">↑ 12% from last month</div>
            </div>

            {/* Current Streak */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-600 mb-2">Current Streak</div>
              <div className="text-3xl font-bold text-gray-900">8 days</div>
              <div className="mt-2 text-sm text-blue-600">Personal best: 15 days</div>
            </div>

            {/* Eco Points */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-gray-600 mb-2">Eco Points</div>
              <div className="text-3xl font-bold text-gray-900">2,500</div>
              <div className="mt-2 text-sm text-purple-600">500 until next reward</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">🔄</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  Recent Activity
                </div>
                <div className="text-sm text-gray-600">Last 7 Days</div>
              </div>
            </div>
          </div>

          {/* Activity List */}
          <div className="space-y-4">
            {/* Activity Item */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    🥤
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Recycled Soda Can</div>
                    <div className="text-xs text-gray-500">Today, 2:30 PM</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-green-600">+10 points</div>
              </div>
            </div>

            {/* More Activity Items */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    📦
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Cardboard Box</div>
                    <div className="text-xs text-gray-500">Yesterday, 4:15 PM</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-green-600">+15 points</div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <button 
            className="mt-6 w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            View Full History
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}; 