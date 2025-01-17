import React from 'react';

interface StepCard {
  step: number;
  title: string;
  description: string;
  icon: string;
}

const steps: StepCard[] = [
  {
    step: 1,
    title: 'Install EcoTale',
    description: 'Download our mobile app and connect it to your smart waste bin. Setup takes less than 2 minutes.',
    icon: '📱'
  },
  {
    step: 2,
    title: 'Act Normal',
    description: 'Keep using your trash can like you always have. Our smart bin quietly analyzes your waste patterns in the background.',
    icon: '🗑️'
  },
  {
    step: 3,
    title: 'Get Reports',
    description: 'Receive detailed waste analytics and insights. Understand your environmental impact and discover ways to reduce waste & impact on your wallet.',
    icon: '📊'
  },
  {
    step: 4,
    title: 'Earn Rewards',
    description: 'Get exclusive discounts and coupons for products you frequently dispose of. Turn your waste into savings.',
    icon: '💰'
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-gray-900/[0.1]" style={{ backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your daily habits into rewards with our smart waste management system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative group"
            >
              {/* Card Container with 3D effect */}
              <div className="relative bg-white rounded-2xl p-8 shadow-[0_8px_16px_rgb(0_0_0/0.08)] 
                            transition-all duration-300 
                            group-hover:shadow-[0_16px_32px_rgb(0_0_0/0.12)] 
                            group-hover:-translate-y-1 
                            transform perspective-1000 
                            group-hover:rotate-x-1 group-hover:rotate-y-1
                            border border-gray-100">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />

                {/* Step Number with enhanced styling */}
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center 
                              text-white font-bold text-lg transform -rotate-6 shadow-lg
                              transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                  {step.step}
                </div>
                
                {/* Icon with enhanced container */}
                <div className="text-5xl mb-6 mt-3 transform transition-transform duration-300 
                              group-hover:scale-110 group-hover:-rotate-6">
                  {step.icon}
                </div>
                
                {/* Content with improved typography */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Enhanced Connector Line */}
                {step.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-gray-300 transform rotate-45" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Action Button */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center px-10 py-4 border border-transparent text-lg font-medium 
                           rounded-xl text-white bg-primary-600 hover:bg-primary-700 
                           transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5
                           transform perspective-1000">
            Download App
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}; 