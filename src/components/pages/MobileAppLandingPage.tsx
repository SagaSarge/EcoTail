import React from 'react';

export const MobileAppLandingPage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Mobile Device Frame */}
          <div className="relative w-[320px] h-[650px] bg-white rounded-[40px] shadow-2xl border-8 border-gray-800 overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 flex items-center justify-between px-6 text-white text-xs">
              <span>9:41</span>
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                </svg>
              </div>
            </div>

            {/* App Content */}
            <div className="relative h-full pt-8 pb-4 px-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">EcoTale</div>
                    <div className="text-xs text-gray-500">by Self Labs</div>
                  </div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>

              {/* Main Content - Trash Can */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  {/* Trash Can SVG */}
                  <svg className="w-32 h-32 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                    />
                  </svg>
                  {/* Circular Progress */}
                  <div className="absolute inset-0 w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        className="text-gray-200"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="transparent"
                        r="58"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className="text-primary-500"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="58"
                        cx="64"
                        cy="64"
                        strokeDasharray="364"
                        strokeDashoffset="91"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                      <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Guest User</div>
                      <div className="text-xs text-gray-500">Level 1</div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device Home Indicator */}
          <div className="mt-4 w-32 h-1 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}; 