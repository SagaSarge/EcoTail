import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: 1,
    title: "AI-Powered Recognition",
    description: "Advanced waste recognition technology that makes recycling effortless and accurate.",
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    benefits: [
      "Real-time item detection",
      "Material classification",
      "Recycling recommendations",
      "Contamination prevention"
    ]
  },
  {
    id: 2,
    title: "Smart Analytics Dashboard",
    description: "Comprehensive insights into your recycling habits with detailed metrics and trends.",
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    benefits: [
      "Waste tracking metrics",
      "Progress visualization",
      "Custom reports",
      "Goal setting"
    ]
  },
  {
    id: 3,
    title: "Smart Notifications",
    description: "Stay informed and motivated with personalized alerts and reminders.",
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    benefits: [
      "Recycling reminders",
      "Achievement updates",
      "Eco-tips",
      "Community events"
    ]
  },
  {
    id: 4,
    title: "Family Management",
    description: "Engage your entire household in sustainable practices with family accounts.",
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    benefits: [
      "Multiple accounts",
      "Activity tracking",
      "Shared rewards",
      "Family challenges"
    ]
  }
];

export const Features: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-96 h-96 bg-primary-200 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of waste management with our innovative technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-100 to-primary-50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="h-12 w-12 bg-primary-100 rounded-xl mb-6 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200">
            Join the Recycling Revolution
          </button>
        </div>
      </div>
    </section>
  );
}; 