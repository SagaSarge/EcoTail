import React from 'react';

export const MobileAppLandingPage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* App Interface Container */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#9747FF] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  EcoTale
                </div>
                <div className="text-sm text-gray-500">by Self Labs</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-[#F4EEFF] rounded-xl text-[#9747FF] text-sm font-medium">
                Level 5
              </div>
              <button className="w-10 h-10 flex items-center justify-center text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center mb-16">
            {/* Progress Circle */}
            <div className="text-center mb-16">
              <div className="text-[#9747FF] text-6xl font-bold mb-2">75%</div>
              <div className="text-gray-500">Weekly Goal</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-24 gap-y-12 w-full max-w-lg">
              <div className="text-center">
                <div className="text-2xl mb-1">♻️</div>
                <div className="text-2xl font-bold text-gray-900">347</div>
                <div className="text-sm text-gray-500">Items Recycled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">⭐</div>
                <div className="text-2xl font-bold text-gray-900">1,280</div>
                <div className="text-sm text-gray-500">Points Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🔥</div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-500">Streak Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🌱</div>
                <div className="text-2xl font-bold text-gray-900">28kg</div>
                <div className="text-sm text-gray-500">CO₂ Saved</div>
              </div>
            </div>
          </div>

          {/* Profile Bar */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#9747FF] flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">Eco Warrior</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 