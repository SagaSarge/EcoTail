import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HowSavingsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Smart Waste Tracking',
      description: 'Real-time tracking and analytics of your recyclable items with AI-powered recognition.',
      features: ['Live waste analytics', 'Item recognition', 'Progress tracking'],
      roadmapSteps: [
        {
          step: '1',
          title: 'Scan Items',
          description: 'Use your camera to scan recyclable items'
        },
        {
          step: '2',
          title: 'Get Points',
          description: 'Earn points for each correctly recycled item'
        },
        {
          step: '3',
          title: 'Track Progress',
          description: 'Monitor your recycling goals in real-time'
        }
      ],
      expandedContent: (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-lg font-bold text-gray-900 mb-3">Live Activity Feed</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    🥤
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Soda Can</div>
                    <div className="text-xs text-gray-500">Just now</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                    ⭐
                  </div>
                  <div className="text-xs text-green-600 font-medium">+5 pts</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    💧
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Water Bottle</div>
                    <div className="text-xs text-gray-500">2m ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                    ♻️
                  </div>
                  <div className="text-xs text-blue-600 font-medium">+3 pts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '02',
      title: 'Optimization & Rewards',
      description: 'Earn points and unlock rewards while making sustainable choices.',
      features: ['Points system', 'Partner rewards', 'Achievement badges'],
      roadmapSteps: [
        {
          step: '1',
          title: 'Daily Goals',
          description: 'Set and achieve daily recycling targets'
        },
        {
          step: '2',
          title: 'Earn Rewards',
          description: 'Convert points into partner discounts'
        },
        {
          step: '3',
          title: 'Track Streaks',
          description: 'Maintain your recycling streak'
        }
      ],
      expandedContent: (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-lg font-bold text-gray-900 mb-3">Current Rewards</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#F4B400]/10 rounded-lg flex items-center justify-center">
                    ⭐
                  </div>
                  <div className="text-sm font-medium text-gray-900">TerraCycle</div>
                </div>
                <div className="text-xs text-gray-600">18/40 items</div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F4B400] rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#4285F4]/10 rounded-lg flex items-center justify-center">
                    💧
                  </div>
                  <div className="text-sm font-medium text-gray-900">WaterSaver</div>
                </div>
                <div className="text-xs text-gray-600">25/50 bottles</div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#4285F4] rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '03',
      title: 'Real Savings',
      description: 'Track your environmental impact and monetary savings in real-time.',
      features: ['Impact metrics', 'Cost savings', 'Achievement tracking'],
      roadmapSteps: [
        {
          step: '1',
          title: 'View Stats',
          description: 'Monitor your environmental impact'
        },
        {
          step: '2',
          title: 'Save Money',
          description: 'See your cost savings grow'
        },
        {
          step: '3',
          title: 'Share Impact',
          description: 'Share achievements with friends'
        }
      ],
      expandedContent: (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-lg font-bold text-gray-900 mb-3">Environmental Impact</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <div className="text-sm font-medium text-gray-900">CO₂ Prevented</div>
                <div className="text-lg font-bold text-[#0F9D58]">1.2t</div>
                <div className="text-xs text-gray-600">+12% this month</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <div className="text-sm font-medium text-gray-900">Trees Saved</div>
                <div className="text-lg font-bold text-[#0F9D58]">48</div>
                <div className="text-xs text-gray-600">+8% this month</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <div className="text-sm font-medium text-gray-900">Water Saved</div>
                <div className="text-lg font-bold text-[#4285F4]">2.8kL</div>
                <div className="text-xs text-gray-600">+15% this month</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <div className="text-sm font-medium text-gray-900">Energy Saved</div>
                <div className="text-lg font-bold text-[#F4B400]">180kW</div>
                <div className="text-xs text-gray-600">+10% this month</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const getCardTheme = (index: number) => {
    switch(index) {
      case 0:
        return {
          cardBg: 'bg-white',
          ringColor: 'ring-[#4285F4]',
          numberColor: 'text-[#4285F4]',
          iconBg: 'bg-[#4285F4]/10',
          iconColor: 'text-[#4285F4]',
          hoverBg: 'hover:bg-[#4285F4]',
          playBg: 'bg-[#4285F4]',
          featureBg: 'bg-[#4285F4]/5'
        };
      case 1:
        return {
          cardBg: 'bg-white',
          ringColor: 'ring-[#F4B400]',
          numberColor: 'text-[#F4B400]',
          iconBg: 'bg-[#F4B400]/10',
          iconColor: 'text-[#F4B400]',
          hoverBg: 'hover:bg-[#F4B400]',
          playBg: 'bg-[#F4B400]',
          featureBg: 'bg-[#F4B400]/5'
        };
      case 2:
        return {
          cardBg: 'bg-white',
          ringColor: 'ring-[#0F9D58]',
          numberColor: 'text-[#0F9D58]',
          iconBg: 'bg-[#0F9D58]/10',
          iconColor: 'text-[#0F9D58]',
          hoverBg: 'hover:bg-[#0F9D58]',
          playBg: 'bg-[#0F9D58]',
          featureBg: 'bg-[#0F9D58]/5'
        };
      default:
        return {};
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#4285F4]/10 to-[#4285F4]/5 blur-3xl opacity-70" 
        />
        <div 
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-[#0F9D58]/10 to-[#0F9D58]/5 blur-3xl opacity-70" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 lg:text-5xl">
            How Our
            <span className="relative">
              <span className="absolute -inset-2 blur-2xl bg-[#4285F4]/20 opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#4285F4]/80"> Savings </span>
            </span>
            Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your waste management into a revenue stream with our innovative three-step process
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-[#4285F4]/10 p-8 mb-16 relative">
          <div className="absolute -top-4 right-8 bg-[#4285F4] text-white px-4 py-2 rounded-full text-sm font-medium">
            Hover cards to see live updates
          </div>
          
          {/* Steps Container with Expanded Content Side by Side */}
          <div className="flex gap-8">
            {/* Vertical Steps */}
            <div className="w-1/3 space-y-6">
              {steps.map((step, index) => {
                const theme = getCardTheme(index);
                return (
                  <div key={step.number} 
                       className="relative group"
                       onMouseEnter={() => setActiveCard(index)}
                  >
                    <div 
                      className={`${theme.cardBg} rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer
                        ${activeCard === index ? `ring-2 ${theme.ringColor} shadow-2xl` : 'hover:shadow-xl hover:-translate-x-1'}`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`text-4xl font-bold ${theme.numberColor}`}>{step.number}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Features List */}
                      <ul className="space-y-2 pl-4">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <svg className={`w-4 h-4 mr-2 ${theme.iconColor} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expanded Content Panel */}
            <div className="w-2/3 relative"
                 onMouseEnter={() => activeCard !== null && setActiveCard(activeCard)}
                 onMouseLeave={() => setActiveCard(null)}>
              <div className="sticky top-8">
                {activeCard !== null ? (
                  <div 
                    className="bg-white rounded-xl p-8 shadow-2xl border border-gray-100 transform transition-all duration-300 ease-in-out"
                  >
                    {/* Roadmap Steps */}
                    <div className="mb-8">
                      <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
                        
                        {/* Steps */}
                        <div className="grid grid-cols-3 gap-4 relative">
                          {steps[activeCard].roadmapSteps.map((roadmapStep, index) => {
                            const theme = getCardTheme(activeCard);
                            return (
                              <div key={index} className="flex flex-col items-center text-center">
                                <div className={`w-24 h-24 ${theme.cardBg} rounded-full border-2 ${theme.ringColor} flex items-center justify-center mb-4 relative z-10 bg-white group-hover:scale-110 transition-transform`}>
                                  <div className="text-center">
                                    <div className={`text-xl font-bold ${theme.numberColor}`}>{roadmapStep.step}</div>
                                    <div className={`text-sm font-medium ${theme.numberColor}`}>Step</div>
                                  </div>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{roadmapStep.title}</h4>
                                <p className="text-sm text-gray-600">{roadmapStep.description}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{steps[activeCard].title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{steps[activeCard].expandedContent}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {steps[activeCard].features.map((feature, i) => (
                        <div key={i} className={`${getCardTheme(activeCard).featureBg} rounded-lg p-4`}>
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 ${getCardTheme(activeCard).iconBg} rounded-full flex items-center justify-center`}>
                              <svg className={`w-5 h-5 ${getCardTheme(activeCard).iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400 text-lg">
                    Hover over a step to see more details
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/purchase')}
            className="bg-[#4285F4] hover:bg-[#4285F4]/90 text-white text-xl font-semibold px-12 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 mx-auto group"
          >
            Buy Now
            <svg 
              className="w-6 h-6 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}; 