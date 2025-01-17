import React from 'react';

interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

const values: ValueCard[] = [
  {
    title: 'Smart Waste Management',
    description: 'Our AI-powered bins automatically track and categorize your waste, providing real-time insights into your disposal habits.',
    icon: '🤖'
  },
  {
    title: 'Environmental Impact',
    description: 'Understand and reduce your carbon footprint through detailed analytics and actionable recommendations.',
    icon: '🌍'
  },
  {
    title: 'Cost Savings',
    description: 'Turn your waste into savings with personalized recommendations and exclusive discounts on products you frequently use.',
    icon: '💰'
  }
];

export const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 relative bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionizing Waste Management
            <span className="block text-primary-600">Through Innovation</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600">
            Experience the future of sustainable living with our intelligent waste management solution.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative z-10 h-full bg-white rounded-3xl p-8 
                            shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden
                            transition-all duration-300 
                            hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-primary-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container */}
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6
                                transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    <span className="text-3xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      {value.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>

              {/* Card Decoration */}
              <div className="absolute inset-0 bg-primary-500 rounded-3xl transform translate-x-2 translate-y-2 -z-10 opacity-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of households already making a difference with EcoTale's smart waste management system.
          </p>
          <button className="inline-flex items-center px-8 py-3 rounded-xl bg-primary-600 text-white font-medium
                           hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5">
            Learn More About Our Impact
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}; 