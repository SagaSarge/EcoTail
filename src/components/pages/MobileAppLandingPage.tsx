import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MobileAppLandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Direct App Interface Container */}
        <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  EcoTale
                </div>
                <div className="text-sm text-gray-600">by Self Labs</div>
              </div>
            </button>
            <div className="flex items-center gap-4">
              <div className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl text-gray-900 text-sm font-medium border border-gray-200">
                Level 5
              </div>
              <button className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Main Content */}
            <div className="flex flex-col items-center mb-12">
              {/* 3D Trash Can */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Shadow Effect */}
                <div className="absolute bottom-0 w-64 h-12 bg-gray-900/10 rounded-full blur-xl"></div>

                {/* 3D Trash Can SVG */}
                <svg className="w-full h-full" viewBox="0 0 200 240" fill="none">
                  {/* Lid Shadow */}
                  <path
                    d="M40 60C40 60 45 55 100 55C155 55 160 60 160 60"
                    stroke="rgba(17, 24, 39, 0.3)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* Lid */}
                  <path
                    d="M35 55C35 55 40 50 100 50C160 50 165 55 165 55"
                    stroke="rgb(17, 24, 39)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  />

                  {/* Can Body - Main */}
                  <path
                    d="M45 60L55 200H145L155 60"
                    stroke="rgb(17, 24, 39)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  />

                  {/* Left Side Highlight */}
                  <path
                    d="M55 60L63 200"
                    stroke="rgba(17, 24, 39, 0.4)"
                    strokeWidth="2"
                  />

                  {/* Right Side Highlight */}
                  <path
                    d="M145 60L137 200"
                    stroke="rgba(17, 24, 39, 0.4)"
                    strokeWidth="2"
                  />

                  {/* Handle Left */}
                  <path
                    d="M65 90C65 90 80 85 100 85"
                    stroke="rgb(17, 24, 39)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  />

                  {/* Handle Right */}
                  <path
                    d="M135 90C135 90 120 85 100 85"
                    stroke="rgb(17, 24, 39)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  />

                  {/* Horizontal Lines */}
                  {[120, 150, 180].map((y, i) => (
                    <path
                      key={i}
                      d="M55 Y L145 Y"
                      stroke="rgba(17, 24, 39, 0.3)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      transform={`translate(0, ${y-60})`}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* Profile Bar */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white font-medium text-lg shadow-lg">
                JD
              </div>
              <div>
                <div className="text-base font-medium text-gray-900">John Doe</div>
                <div className="text-sm text-gray-600">Eco Warrior</div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Reports Interface Container */}
        <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  Daily Reports
                </div>
                <div className="text-sm text-gray-600">Activity Overview</div>
              </div>
            </button>
            <div className="flex items-center gap-4">
              <div className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl text-gray-900 text-sm font-medium border border-gray-200">
                Today
              </div>
              <button className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Activity Timeline - Left Aligned */}
            <div className="absolute left-7 top-0 bottom-0 flex flex-col justify-center items-center">
              <div className="relative w-2 h-64 bg-gray-200 rounded-full overflow-hidden">
                {/* Timeline Progress */}
                <div 
                  className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 to-gray-800 rounded-full transition-all duration-1000"
                  style={{ height: '60%' }}
                >
                  {/* Animated Glow Effect */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-white/20 blur-sm transform -skew-y-45"></div>
                </div>
              </div>
              {/* Time Label */}
              <div className="mt-2 text-gray-900 font-medium text-sm">
                14:30
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center mb-12">
              {/* Activity Feed */}
              <div className="relative w-96 h-96">
                {/* Shadow Effect */}
                <div className="absolute bottom-0 w-64 h-12 bg-gray-900/10 rounded-full blur-xl"></div>
                
                {/* Live Feed Container */}
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-100 to-white border border-gray-200 shadow-lg p-6 overflow-hidden">
                  <div className="space-y-4">
                    {/* Current Items Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-lg font-bold text-gray-900">Current Items</div>
                      <div className="px-3 py-1 bg-blue-100 rounded-lg text-blue-600 text-sm">
                        Last Updated: 2m ago
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="space-y-3">
                      {/* Dr Pepper Can */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            🥤
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Dr Pepper Can</div>
                            <div className="text-xs text-gray-500">Added 5m ago</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center" title="Active Reward">
                            ⭐
                          </div>
                          <div className="text-xs text-green-600 font-medium">18/40</div>
                        </div>
                      </div>

                      {/* Doritos Bag */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            🌮
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Doritos Bag</div>
                            <div className="text-xs text-gray-500">Added 12m ago</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center" title="TerraCycle Program">
                            ♻️
                          </div>
                          <div className="text-xs text-purple-600 font-medium">8/15</div>
                        </div>
                      </div>

                      {/* Water Bottle */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            💧
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Dasani Bottle</div>
                            <div className="text-xs text-gray-500">Added 25m ago</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center" title="Recyclable">
                            ♻️
                          </div>
                        </div>
                      </div>

                      {/* Cardboard Box */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center">
                            📦
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Amazon Box</div>
                            <div className="text-xs text-gray-500">Added 45m ago</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center" title="Recyclable">
                            ♻️
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span>Active Reward</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>♻️</span>
                          <span>Recyclable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Bar */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white font-medium text-lg shadow-lg">
                JD
              </div>
              <div>
                <div className="text-base font-medium text-gray-900">John Doe</div>
                <div className="text-sm text-gray-600">Daily Summary</div>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact Stats Dashboard */}
        <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  Environmental Impact
                </div>
                <div className="text-sm text-gray-600">Your Recycling Journey</div>
              </div>
            </button>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 bg-green-100 rounded-lg text-green-600 text-sm font-medium">
                Level 5 • Top 5%
              </div>
            </div>
          </div>

          {/* Impact Cards Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Monthly Progress Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    📈
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Monthly Progress</div>
                    <div className="text-sm text-gray-600">647 of 1k items</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-blue-100 rounded-lg text-blue-600 text-sm font-medium">
                  65% Complete
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Current Streak</span>
                  <span className="text-blue-600 font-medium">8 days</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full relative"
                    style={{width: '65%'}}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">353 items to reach your goal</div>
                <div className="pt-3 mt-3 border-t border-gray-100">
                  <button className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    View Detailed Stats
                  </button>
                </div>
              </div>
            </div>

            {/* Real Impact Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    🌍
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Real Impact</div>
                    <div className="text-sm text-gray-600">Environmental Savings</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-100 rounded-lg text-green-600 text-sm font-medium">
                  +12% This Month
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-gray-900">1.2t</div>
                    <div className="text-xs text-gray-600">CO₂ Prevented</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-gray-900">48</div>
                    <div className="text-xs text-gray-600">Trees Saved</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-gray-900">2.8kL</div>
                    <div className="text-xs text-gray-600">Water Saved</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-gray-900">180kW</div>
                    <div className="text-xs text-gray-600">Energy Saved</div>
                  </div>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-100">
                  <button className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn About Your Impact
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Achievement Bar */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">🌟</div>
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">💧</div>
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">⚡</div>
                </div>
                <div className="text-sm text-gray-600">3 achievements unlocked this month</div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View All →
              </button>
            </div>
          </div>
        </div>

        {/* Product Impact Section */}
        <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-4 group cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  Product Impact
                </div>
                <div className="text-sm text-gray-600">Recycling Insights & Alternatives</div>
              </div>
            </button>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search eco-friendly alternatives..."
                  className="w-64 px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl text-gray-900 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Dr Pepper Product Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  🥤
                </div>
                <div className="px-3 py-1 bg-green-100 rounded-lg text-green-600 text-sm font-medium">
                  18/40
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-green-600 font-medium">$2 off</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full relative"
                    style={{width: '45%'}}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">22 more needed</div>
                <div className="pt-3 mt-3 border-t border-gray-100">
                  <button className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Recycling Info
                  </button>
                </div>
              </div>
            </div>

            {/* Doritos Product Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  🌮
                </div>
                <div className="px-3 py-1 bg-purple-100 rounded-lg text-purple-600 text-sm font-medium">
                  8/15
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-green-600 font-medium">BOGO</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full relative"
                    style={{width: '53%'}}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">7 more needed</div>
                <div className="pt-3 mt-3 border-t border-gray-100">
                  <button className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Recycling Info
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Chat Interface */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask about eco-friendly alternatives..."
                className="flex-1 px-4 py-2 bg-gray-50 rounded-xl text-gray-900 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                Find Alternatives
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 