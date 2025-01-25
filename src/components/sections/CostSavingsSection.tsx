import React from 'react';

const usageSteps = [
  {
    title: "Use Like Normal",
    description: "Just toss your recyclables like any trash can",
    detail: "No extra steps needed",
    icon: "🗑️"
  },
  {
    title: "Bin Does The Work",
    description: "Smart bin automatically sorts and tracks items",
    detail: "Zero effort required",
    icon: "✨"
  },
  {
    title: "Save Money",
    description: "Watch your savings grow automatically",
    detail: "Up to $70/month",
    icon: "💵"
  }
];

const commonItems = [
  {
    item: "Soda Cans",
    action: "Just toss in",
    reward: "2¢ each",
    icon: "🥤"
  },
  {
    item: "Water Bottles",
    action: "Drop as usual",
    reward: "3¢ each",
    icon: "💧"
  },
  {
    item: "Cardboard",
    action: "Toss and forget",
    reward: "5¢ per box",
    icon: "📦"
  }
];

export const CostSavingsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            It's Just a Smarter Trash Can
          </h2>
          <p className="text-lg text-gray-600">
            Use it normally, let the bin do the work
          </p>
        </div>

        {/* Simple Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {usageSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {step.description}
              </p>
              <div className="text-sm font-medium text-primary-600">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Common Items Examples */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Example: Your Daily Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commonItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 text-center"
              >
                <div className="text-3xl mb-3">
                  {item.icon}
                </div>
                <div className="font-medium text-gray-900 mb-1">
                  {item.item}
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  {item.action}
                </div>
                <div className="text-sm font-medium text-primary-600">
                  {item.reward}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            *Rewards automatically added to your account
          </div>
        </div>
      </div>
    </section>
  );
}; 