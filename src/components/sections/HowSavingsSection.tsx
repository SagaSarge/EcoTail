import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HowSavingsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Smart Waste Tracking',
      description: 'AI-Agents inform you of your waste analytics and identifies cost-saving opportunities in real-time.',
      features: ['Automated waste analysis', 'Usage pattern detection', 'Cost optimization insights'],
      roadmapSteps: [
        {
          step: '1',
          title: 'Install Sensors',
          description: 'Smart sensors automatically track waste levels 24/7'
        },
        {
          step: '2',
          title: 'AI Analysis',
          description: 'Our AI processes data to identify patterns and opportunities'
        },
        {
          step: '3',
          title: 'Get Insights',
          description: 'Receive real-time alerts and optimization suggestions'
        }
      ],
      expandedContent: 'Our AI system continuously monitors your waste patterns, providing real-time insights and actionable recommendations. Watch how businesses have reduced their waste costs by up to 40% using our smart tracking system.'
    },
    {
      number: '02',
      title: 'Optimization & Rewards',
      description: 'Receive personalized recommendations and earn rewards for implementing sustainable practices.',
      features: ['Custom action plans', 'Points-based rewards', 'Partner discounts'],
      roadmapSteps: [
        {
          step: '1',
          title: 'Set Goals',
          description: 'Choose your sustainability targets and timeline'
        },
        {
          step: '2',
          title: 'Take Action',
          description: 'Follow personalized recommendations to reduce waste'
        },
        {
          step: '3',
          title: 'Earn Rewards',
          description: 'Get points and unlock partner discounts'
        }
      ],
      expandedContent: 'Transform your sustainability efforts into tangible rewards. See how our points system works and how you can earn discounts from our eco-friendly partners.'
    },
    {
      number: '03',
      title: 'Real Savings',
      description: 'Watch your savings grow through reduced waste costs and reward redemptions.',
      features: ['Monthly cost reduction', 'Reward redemptions', 'ROI tracking'],
      roadmapSteps: [
        {
          step: '1',
          title: 'Track Progress',
          description: 'Monitor your waste reduction and savings in real-time'
        },
        {
          step: '2',
          title: 'Redeem Rewards',
          description: 'Use earned points for partner products and services'
        },
        {
          step: '3',
          title: 'Scale Impact',
          description: 'Expand optimization across more locations or departments'
        }
      ],
      expandedContent: 'Track your ROI in real-time and see how your sustainable choices translate into significant cost savings. Our users typically see returns within the first 6 months.'
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
          ringColor: 'ring-violet-500',
          numberColor: 'text-violet-500',
          iconBg: 'bg-violet-100',
          iconColor: 'text-violet-500',
          hoverBg: 'hover:bg-violet-600',
          playBg: 'bg-violet-500',
          featureBg: 'bg-violet-50/50'
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4285F4]/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float" 
          style={{ animationDelay: '0s', zIndex: 0 }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float" 
          style={{ animationDelay: '-5s', zIndex: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 lg:text-5xl">
            How Our
            <span className="bg-gradient-to-r from-[#4285F4] via-violet-500 to-[#0F9D58] bg-clip-text text-transparent"> Savings </span>
            Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your waste management into a revenue stream with our innovative three-step process
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 mb-16 relative">
          <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#4285F4] via-violet-500 to-[#0F9D58] text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce">
            Hover cards to learn more
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
            className="bg-gradient-to-r from-[#4285F4] via-violet-500 to-[#0F9D58] hover:from-[#4285F4] hover:via-violet-600 hover:to-[#0F9D58] text-white text-xl font-semibold px-12 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}; 