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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl">
              <div className="text-blue-600 text-sm font-medium mb-2">Total Items Recycled</div>
              <div className="text-3xl font-bold text-gray-900">1,247</div>
              <div className="text-blue-600/60 text-sm mt-1">+23% from last month</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-6 rounded-2xl">
              <div className="text-green-600 text-sm font-medium mb-2">Current Streak</div>
              <div className="text-3xl font-bold text-gray-900">15 Days</div>
              <div className="text-green-600/60 text-sm mt-1">Personal best!</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-2xl">
              <div className="text-purple-600 text-sm font-medium mb-2">Eco Points</div>
              <div className="text-3xl font-bold text-gray-900">3,580</div>
              <div className="text-purple-600/60 text-sm mt-1">89 points until next reward</div>
            </div>
          </div>
        </div>

        {/* Rewards & Discounts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Active Rewards</h2>
              <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
            </div>
            <div className="space-y-4">
              {/* Reward Cards */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                      🎁
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">$5 Off Next Purchase</div>
                      <div className="text-sm text-gray-500">Valid until Dec 31</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm font-medium">
                    Claim
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      🌟
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Free Coffee</div>
                      <div className="text-sm text-gray-500">At EcoCafe</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium">
                    Use
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Available Discounts</h2>
              <button className="text-blue-600 text-sm hover:text-blue-700">Browse More</button>
            </div>
            <div className="space-y-4">
              {/* Discount Cards */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl">
                      💰
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">20% Off Eco Products</div>
                      <div className="text-sm text-gray-500">Code: ECO20</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-lg text-sm font-medium">
                    Copy
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                      🎉
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">BOGO Deal</div>
                      <div className="text-sm text-gray-500">On reusable items</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-medium">
                    Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Waste Analytics Section */}
        <div className="bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-saturate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Waste Analytics</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">Week</button>
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium">Month</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">Year</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recycling Breakdown */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recycling Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Plastic</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Paper</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Glass</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Metal</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{width: '10%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">10%</span>
                </div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Environmental Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-4 rounded-xl">
                  <div className="text-green-600 text-sm font-medium mb-1">CO₂ Reduced</div>
                  <div className="text-2xl font-bold text-gray-900">1.2t</div>
                  <div className="text-green-600/60 text-xs">Equivalent to 52 trees</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl">
                  <div className="text-blue-600 text-sm font-medium mb-1">Water Saved</div>
                  <div className="text-2xl font-bold text-gray-900">2.8kL</div>
                  <div className="text-blue-600/60 text-xs">1,120 water bottles</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-4 rounded-xl">
                  <div className="text-yellow-600 text-sm font-medium mb-1">Energy Saved</div>
                  <div className="text-2xl font-bold text-gray-900">180kW</div>
                  <div className="text-yellow-600/60 text-xs">Powers 15 homes/day</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-4 rounded-xl">
                  <div className="text-purple-600 text-sm font-medium mb-1">Waste Diverted</div>
                  <div className="text-2xl font-bold text-gray-900">450kg</div>
                  <div className="text-purple-600/60 text-xs">From landfills</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 