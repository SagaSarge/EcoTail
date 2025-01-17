import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SavingsCard {
  title: string;
  amount: string;
  period: string;
  description: string;
  icon: string;
}

const savingsTypes: SavingsCard[] = [
  {
    title: 'Average Monthly Savings',
    amount: '$45',
    period: 'per month',
    description: 'Through smart product recommendations and waste reduction',
    icon: '💰'
  },
  {
    title: 'Recycling Rewards',
    amount: '$120',
    period: 'per quarter',
    description: 'Earn points and rewards for responsible waste management',
    icon: '🎁'
  },
  {
    title: 'Brand Discounts',
    amount: '25%',
    period: 'average',
    description: 'Exclusive discounts on your frequently used products',
    icon: '🏷️'
  }
];

export const CostSavingsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary-700/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          {/* Content Side */}
          <div className="text-white mb-16 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6 lg:text-5xl leading-tight">
              Turn Your Waste into
              <span className="block text-primary-300">Savings</span>
            </h2>
            <p className="text-xl text-primary-100 mb-12 leading-relaxed">
              Our smart waste management system doesn't just help the environment - it helps your wallet too. Get rewarded for making sustainable choices.
            </p>

            {/* Savings Calculator */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Potential Annual Savings</h3>
              <div className="flex items-center justify-between mb-8">
                <div className="text-4xl font-bold text-primary-300">$840</div>
                <span className="text-primary-200">per year</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-primary-200">Product Savings</span>
                  <span className="text-primary-300">$540</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-200">Recycling Rewards</span>
                  <span className="text-primary-300">$480</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-200">Brand Discounts</span>
                  <span className="text-primary-300">$320</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => navigate('/calculate-savings')}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-xl font-medium hover:bg-primary-50 transition-colors duration-300"
            >
              Calculate Your Savings
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          {/* Cards Side */}
          <div className="space-y-6">
            {savingsTypes.map((card, index) => (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-x-2"
              >
                <div className="absolute top-0 right-0 mt-6 mr-6">
                  <span className="text-4xl">{card.icon}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-primary-300">{card.amount}</span>
                  <span className="ml-2 text-primary-200">{card.period}</span>
                </div>
                <p className="text-primary-100">
                  {card.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}

            {/* Floating Notification */}
            <div className="absolute -right-4 -bottom-4 transform rotate-6">
              <div className="bg-white text-primary-900 rounded-2xl shadow-lg p-4">
                <div className="text-sm font-semibold">💫 New Reward Available!</div>
                <div className="text-xs">50% off your next purchase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 