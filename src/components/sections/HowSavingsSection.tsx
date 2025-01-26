import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../hooks/useAnalytics';
import { motion } from 'framer-motion';

export const HowSavingsSection: React.FC = () => {
  const navigate = useNavigate();
  const { trackPurchaseClick } = useAnalytics();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Smart Waste Tracking',
      description: 'Track your recyclables in real-time with AI recognition',
      icon: '📱',
      color: 'blue',
      features: [
        { title: 'Live Analytics', description: 'Monitor your recycling habits in real-time' },
        { title: 'Smart Recognition', description: 'AI-powered item identification' },
        { title: 'Progress Tracking', description: 'Set and achieve recycling goals' }
      ]
    },
    {
      number: '02',
      title: 'Earn & Save',
      description: 'Convert your recycling efforts into real rewards',
      icon: '💰',
      color: 'yellow',
      features: [
        { title: 'Point System', description: 'Earn points for every item recycled' },
        { title: 'Partner Rewards', description: 'Redeem points for valuable rewards' },
        { title: 'Achievement Badges', description: 'Unlock special milestones' }
      ]
    },
    {
      number: '03',
      title: 'Track Impact',
      description: 'See your environmental contribution grow',
      icon: '🌱',
      color: 'green',
      features: [
        { title: 'CO₂ Reduction', description: 'Monitor your carbon footprint reduction' },
        { title: 'Resource Savings', description: 'Track water and energy conservation' },
        { title: 'Community Impact', description: 'See your contribution to sustainability' }
      ]
    }
  ];

  const handlePurchaseClick = () => {
    trackPurchaseClick('how_savings_section');
    navigate('/purchase');
  };

  const getStepColor = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-600',
          hover: 'hover:border-blue-300',
          iconBg: 'bg-blue-100'
        };
      case 'yellow':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          text: 'text-amber-600',
          hover: 'hover:border-amber-300',
          iconBg: 'bg-amber-100'
        };
      case 'green':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          text: 'text-emerald-600',
          hover: 'hover:border-emerald-300',
          iconBg: 'bg-emerald-100'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-600',
          hover: 'hover:border-gray-300',
          iconBg: 'bg-gray-100'
        };
    }
  };

  return (
    <section className="py-8 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
            How Our <span className="text-blue-600">Savings</span> Work
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-600 px-4 sm:px-0">
            Transform your waste management into a revenue stream with our innovative three-step process
          </p>
          <div className="mt-4 sm:mt-8 text-sm sm:text-base text-blue-600 font-medium">
            Hover cards to see live updates
          </div>
        </div>

        {/* Steps Section */}
        <div className="relative max-w-4xl mx-auto">
          {/* Step Circles */}
          <div className="hidden sm:flex justify-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100"></div>
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative px-8">
                <div className={`
                  w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center
                  ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}
                  text-xl sm:text-2xl font-semibold z-10 relative
                `}>
                  {step}
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-500">
                  Step
                </div>
              </div>
            ))}
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-8">
            {steps.map((step, index) => {
              const colors = getStepColor(step.color);
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={step.number}
                  className={`
                    relative rounded-xl sm:rounded-2xl border-2 transition-all cursor-pointer
                    ${colors.bg} ${colors.border} ${colors.hover}
                    ${isActive ? 'border-opacity-100 shadow-lg' : 'border-opacity-50'}
                  `}
                  onClick={() => setActiveStep(isActive ? null : index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 sm:p-8">
                    {/* Step Number */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className={`text-3xl sm:text-5xl font-bold ${colors.text}`}>
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-3xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-base text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 sm:space-y-4 ml-12 sm:ml-16">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${colors.iconBg} ${colors.text} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-sm sm:text-base font-medium text-gray-900">{feature.title}</span>
                            <span className="ml-1 text-xs sm:text-sm text-gray-500">{feature.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Activity Feed Preview (shown when active) */}
                  {isActive && (
                    <div className="mt-2 sm:mt-4 p-4 sm:p-6 bg-gray-50 rounded-b-xl sm:rounded-b-2xl border-t border-gray-100">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Live Activity Feed</h4>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <div>• Recent activity updates will appear here</div>
                        <div>• Real-time tracking information</div>
                        <div>• Progress indicators</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={handlePurchaseClick}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 group gap-2"
          >
            Start Saving Today
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
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