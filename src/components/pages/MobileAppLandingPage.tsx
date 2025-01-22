import React from 'react';

export const MobileAppLandingPage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* App Interface Container */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-50">
                  EcoTale
                </div>
                <div className="text-sm text-slate-400">by Self Labs</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-5 py-2.5 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-xl text-teal-300 text-sm font-medium border border-teal-500/20">
                Level 5
              </div>
              <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Fill Level Progress Bar - Left Aligned */}
            <div className="absolute left-7 top-0 bottom-0 flex flex-col justify-center items-center">
              <div className="relative w-2 h-64 bg-slate-700/50 rounded-full overflow-hidden">
                {/* Fill Level */}
                <div 
                  className="absolute bottom-0 w-full bg-gradient-to-t from-teal-500 to-emerald-400 rounded-full transition-all duration-1000"
                  style={{ height: '75%' }}
                >
                  {/* Animated Glow Effect */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-white/20 blur-sm transform -skew-y-45"></div>
                </div>
              </div>
              {/* Percentage Label */}
              <div className="mt-2 text-teal-300 font-medium text-sm">
                75%
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center mb-12">
              {/* 3D Trash Can */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Shadow Effect */}
                <div className="absolute bottom-0 w-64 h-12 bg-teal-500/10 rounded-full blur-xl"></div>
                
                <svg className="w-full h-full" viewBox="0 0 200 240" fill="none">
                  {/* Lid Shadow */}
                  <path
                    d="M40 60C40 60 45 55 100 55C155 55 160 60 160 60"
                    stroke="rgba(45, 212, 191, 0.3)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* Lid */}
                  <path
                    d="M35 55C35 55 40 50 100 50C160 50 165 55 165 55"
                    stroke="rgb(45, 212, 191)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_4px_rgba(45,212,191,0.4)]"
                  />

                  {/* Can Body - Main */}
                  <path
                    d="M45 60L55 200H145L155 60"
                    stroke="rgb(45, 212, 191)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_4px_rgba(45,212,191,0.4)]"
                  />

                  {/* Left Side Highlight */}
                  <path
                    d="M55 60L63 200"
                    stroke="rgba(45, 212, 191, 0.4)"
                    strokeWidth="2"
                  />

                  {/* Right Side Highlight */}
                  <path
                    d="M145 60L137 200"
                    stroke="rgba(45, 212, 191, 0.4)"
                    strokeWidth="2"
                  />

                  {/* Handle Left */}
                  <path
                    d="M65 90C65 90 80 85 100 85"
                    stroke="rgb(45, 212, 191)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_4px_rgba(45,212,191,0.4)]"
                  />

                  {/* Handle Right */}
                  <path
                    d="M135 90C135 90 120 85 100 85"
                    stroke="rgb(45, 212, 191)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_4px_rgba(45,212,191,0.4)]"
                  />

                  {/* Horizontal Lines */}
                  {[120, 150, 180].map((y, i) => (
                    <path
                      key={i}
                      d="M55 Y L145 Y"
                      stroke="rgba(45, 212, 191, 0.3)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      transform={`translate(0, ${y-60})`}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* Profile Bar */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-medium text-lg shadow-lg shadow-teal-500/20">
                JD
              </div>
              <div>
                <div className="text-base font-medium text-slate-200">John Doe</div>
                <div className="text-sm text-slate-400">Eco Warrior</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 