import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EducationPage: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Learning Modules', value: '25+' },
    { label: 'Active Learners', value: '10k+' },
    { label: 'Success Rate', value: '94%' },
    { label: 'Practice Tests', value: '100+' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-success-400/10 to-success-400/5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-success-400/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Content */}
            <div className="lg:col-span-6">
              <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:mx-0">
                <div className="mb-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-400/10 text-success-400">
                    New Courses Available
                  </span>
                </div>
                
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Master
                  <span className="block text-success-400 mt-2">
                    Sustainable Living
                  </span>
                </h1>
                
                <p className="mt-8 text-lg text-gray-600 sm:text-xl">
                  Learn how to make a real impact on the environment through our comprehensive education platform. From waste management to sustainable practices, we've got you covered.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                  <button
                    onClick={() => navigate('/courses')}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-success-400 text-white font-medium hover:bg-success-500 transition-all duration-200 shadow-lg shadow-success-400/20 hover:shadow-success-400/30"
                  >
                    Start Learning
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => navigate('/resources')}
                    className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-success-400/20 text-success-400 font-medium hover:bg-success-400/5 transition-all duration-200"
                  >
                    Browse Resources
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-success-400">{stat.value}</div>
                      <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image/Visual Side */}
            <div className="mt-16 lg:mt-0 lg:col-span-6">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Main Image Container */}
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-success-400/20 to-success-400/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-8 text-center">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-success-400/20 flex items-center justify-center">
                          <svg className="w-12 h-12 text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Learning</h3>
                        <p className="text-gray-600">Engage with our multimedia content and hands-on exercises</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-success-400/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-success-400/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 