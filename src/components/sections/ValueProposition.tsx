import React, { useEffect, useRef, useState } from 'react';

export const ValueProposition: React.FC = () => {
  const rewardsRef = useRef<HTMLDivElement>(null);
  const [showScrollTooltip, setShowScrollTooltip] = useState(false);
  const [hasBeenFullyVisible, setHasBeenFullyVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollY = window.scrollY;
          const isScrollingDown = currentScrollY > lastScrollY;
          
          // Show tooltip when scrolling down and card is entering viewport
          if (isScrollingDown && entry.isIntersecting && !hasBeenFullyVisible) {
            setShowScrollTooltip(true);
          }
          
          // Hide tooltip when card is fully visible
          if (entry.intersectionRatio >= 0.8 && showScrollTooltip) {
            setTimeout(() => {
              setShowScrollTooltip(false);
              setHasBeenFullyVisible(true);
            }, 1000);
          }
          
          lastScrollY = currentScrollY;
        });
      },
      {
        threshold: [0, 0.5, 0.8],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (rewardsRef.current) {
      observer.observe(rewardsRef.current);
    }

    return () => observer.disconnect();
  }, [hasBeenFullyVisible, showScrollTooltip]);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="block text-5xl">A New Era in</span>
            <span className="block mt-2">Waste <span className="text-primary-600">Management</span></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your sustainability journey with AI-powered insights and rewards
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Smart Tracking */}
          <div className="relative group translate-x-6">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-primary-100 to-primary-50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />
            <div className="relative bg-white rounded-[2rem] p-8 pt-6 pb-24 shadow-lg hover:shadow-2xl transition-all duration-500 h-[600px] transform hover:-translate-y-2 hover:translate-x-1 hover:rotate-1">
              <div className="h-12 w-12 bg-primary-100 rounded-xl mb-8 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Smart Tracking
              </h3>
              <p className="text-gray-600 text-lg mb-12">
                Effortlessly improve your recycling habits with our AI-powered system that educates and rewards your efforts.
              </p>
              
              {/* Mini Cards */}
              <div className="space-y-6">
                {/* Mini Card 1 */}
                <div className="relative bg-primary-50/50 rounded-xl p-4 transform hover:scale-105 transition-transform cursor-pointer group/card1">
                  <h4 className="text-sm font-semibold text-primary-700">Real-time Monitoring</h4>
                  <p className="text-xs text-primary-600/80">Track your impact instantly</p>
                  {/* Tooltip for Real-time Monitoring */}
                  <div className="opacity-0 group-hover/card1:opacity-100 transition-opacity duration-300 absolute left-full top-0 ml-4 z-10">
                    <div className="bg-white rounded-2xl p-6 shadow-xl w-64 border border-primary-100">
                      <div className="h-10 w-10 bg-primary-100 rounded-xl mb-4 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Notifications</h3>
                      <p className="text-sm text-gray-600">Get informed on your trash activities with immediate impact assessment.</p>
                    </div>
                  </div>
                </div>
                
                {/* Mini Card 2 */}
                <div className="relative bg-primary-50/50 rounded-xl p-4 transform hover:scale-105 transition-transform cursor-pointer group/card2">
                  <h4 className="text-sm font-semibold text-primary-700">AI Analysis</h4>
                  <p className="text-xs text-primary-600/80">Smart insights and patterns</p>
                  {/* Tooltip for AI Analysis */}
                  <div className="opacity-0 group-hover/card2:opacity-100 transition-opacity duration-300 absolute left-full top-0 ml-4 z-10">
                    <div className="bg-white rounded-2xl p-6 shadow-xl w-64 border border-primary-100">
                      <div className="h-10 w-10 bg-primary-100 rounded-xl mb-4 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h3>
                      <p className="text-sm text-gray-600">AI algorithms analyze your EcoTale bin to provide personalized recommendations and optimization strategies.</p>
                    </div>
                  </div>
                </div>
                
                {/* Mini Card 3 */}
                <div className="relative bg-primary-50/50 rounded-xl p-4 transform hover:scale-105 transition-transform cursor-pointer group/card3">
                  <h4 className="text-sm font-semibold text-primary-700">Progress Reports</h4>
                  <p className="text-xs text-primary-600/80">Weekly sustainability scores</p>
                  {/* Tooltip for Progress Reports */}
                  <div className="opacity-0 group-hover/card3:opacity-100 transition-opacity duration-300 absolute left-full top-0 ml-4 z-10">
                    <div className="bg-white rounded-2xl p-6 shadow-xl w-64 border border-primary-100">
                      <div className="h-10 w-10 bg-primary-100 rounded-xl mb-4 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Reports</h3>
                      <p className="text-sm text-gray-600">Detailed weekly reports showing your sustainability metrics, achievements, and areas for improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personalized Rewards */}
          <div className="relative group/rewards" ref={rewardsRef}>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-100 to-primary-50 opacity-0 group-hover/rewards:opacity-100 transition-all duration-500 blur-lg" />
            <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-12 w-12 bg-primary-100 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personalized Rewards
              </h3>
              <p className="text-gray-600">
                Earn customized rewards based on your sustainability achievements and preferences, making eco-friendly choices more rewarding.
              </p>
            </div>
            
            {/* Tooltip for Personalized Rewards */}
            <div className={`transition-all duration-700 absolute -bottom-4 left-0 w-full origin-top perspective-1000
              ${showScrollTooltip ? 'opacity-100 rotate-x-0' : 'opacity-0 -rotate-x-90'} 
              ${hasBeenFullyVisible && !showScrollTooltip ? 'group-hover/rewards:opacity-100 group-hover/rewards:rotate-x-0' : ''}`}>
              <div className="bg-gradient-to-b from-gray-50/90 to-gray-100/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 backdrop-blur-md transform preserve-3d">
                {/* Connector Element */}
                <div className="absolute -top-2 left-0 w-full h-2 bg-gradient-to-b from-white to-gray-50/90"></div>
                
                <div className="space-y-4 transform-style-3d">
                  {/* Eco Points Card */}
                  <div className="flex items-center space-x-3 bg-white/40 rounded-xl p-3 border border-gray-200/50 shadow-sm backdrop-blur-sm hover:bg-white/50 transition-all duration-300 hover:translate-z-2">
                    <div className="h-10 w-10 bg-primary-50 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">Eco Points</h4>
                      <p className="text-xs text-gray-700">Convert your sustainable actions into redeemable points</p>
                    </div>
                  </div>
                  
                  {/* Custom Rewards Card */}
                  <div className="flex items-center space-x-3 bg-white/40 rounded-xl p-3 border border-gray-200/50 shadow-sm backdrop-blur-sm hover:bg-white/50 transition-all duration-300 hover:translate-z-2">
                    <div className="h-10 w-10 bg-primary-50 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">Custom Rewards</h4>
                      <p className="text-xs text-gray-700">Choose from a curated selection of eco-friendly products</p>
                    </div>
                  </div>
                  
                  {/* Achievement Tiers Card */}
                  <div className="flex items-center space-x-3 bg-white/40 rounded-xl p-3 border border-gray-200/50 shadow-sm backdrop-blur-sm hover:bg-white/50 transition-all duration-300 hover:translate-z-2">
                    <div className="h-10 w-10 bg-primary-50 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">Achievement Tiers</h4>
                      <p className="text-xs text-gray-700">Unlock exclusive benefits at higher levels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-100 to-primary-50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />
            <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="h-12 w-12 bg-primary-100 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Join a growing community of eco-conscious individuals and see your collective impact on environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 