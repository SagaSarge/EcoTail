import React from 'react';

export const MobileAppLandingPage: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-violet-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* App Interface Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center transform rotate-12">
                <span className="text-white font-bold text-xl transform -rotate-12">E</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  EcoTale
                </div>
                <div className="text-sm text-gray-500">by Self Labs</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-violet-100 rounded-xl text-violet-600 text-sm font-medium">
                Level 5
              </div>
              <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Progress Circle */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 animate-pulse"></div>
              </div>
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 animate-pulse delay-75"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-64 h-64 transform -rotate-90">
                  <circle
                    className="text-gray-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="98"
                    cx="128"
                    cy="128"
                  />
                  <circle
                    className="text-violet-500"
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="98"
                    cx="128"
                    cy="128"
                    strokeDasharray="616"
                    strokeDashoffset="154"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    75%
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Weekly Goal</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Items Recycled', value: '347', icon: '♻️' },
                { label: 'Points Earned', value: '1,280', icon: '⭐' },
                { label: 'Streak Days', value: '12', icon: '🔥' },
                { label: 'CO₂ Saved', value: '28kg', icon: '🌱' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-medium">
                JD
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">Eco Warrior</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl bg-violet-100 text-violet-600 text-sm font-medium hover:bg-violet-200 transition-colors">
                History
              </button>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-medium hover:from-violet-600 hover:to-fuchsia-600 transition-colors">
                Add Item +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 