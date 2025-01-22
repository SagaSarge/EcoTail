import React from 'react';

export const MobileAppLandingPage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* App Interface Container */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-20">
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

          {/* Main Content */}
          <div className="flex flex-col items-center mb-20">
            {/* Large Trash Can Placeholder */}
            <div className="w-96 h-96 bg-gradient-to-b from-slate-700/50 to-slate-800/50 rounded-3xl border border-slate-600/30 shadow-xl shadow-teal-500/5"></div>
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
    </section>
  );
}; 