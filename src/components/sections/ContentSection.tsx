import React from 'react';

interface ContentCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const contentCards: ContentCard[] = [
  {
    title: 'AI-Powered Recycling',
    description: 'Our advanced AI technology helps identify and sort recyclables with 99% accuracy, making sustainable living effortless.',
    icon: '🤖',
    color: 'bg-emerald-50'
  },
  {
    title: 'Track Your Impact',
    description: 'Monitor your environmental impact in real-time. See how your recycling habits contribute to a healthier planet.',
    icon: '📊',
    color: 'bg-blue-50'
  },
  {
    title: 'Community Rewards',
    description: 'Earn points and rewards for your sustainable actions. Join a community of eco-conscious individuals making a difference.',
    icon: '🌟',
    color: 'bg-purple-50'
  }
];

export const ContentSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Recycling Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Harness the power of AI to make sustainable living simple, rewarding, and impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} rounded-2xl p-8 transition-transform duration-300 hover:scale-105`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">♻️</span>
              <span className="text-gray-700 font-medium">100K+ Users</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌍</span>
              <span className="text-gray-700 font-medium">50+ Countries</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌱</span>
              <span className="text-gray-700 font-medium">1M+ Items Recycled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 