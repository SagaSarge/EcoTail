import React from 'react';

interface AppFeature {
  title: string;
  description: string;
  icon: string;
}

const appFeatures: AppFeature[] = [
  {
    title: "Real-time Tracking",
    description: "Monitor your waste management and recycling progress in real-time with detailed analytics.",
    icon: "📊"
  },
  {
    title: "Smart Notifications",
    description: "Get intelligent alerts for pickup schedules and recycling optimization opportunities.",
    icon: "🔔"
  },
  {
    title: "Reward System",
    description: "Earn points and rewards for sustainable practices and consistent recycling habits.",
    icon: "🎁"
  },
  {
    title: "Community Impact",
    description: "Connect with local sustainability initiatives and track your community's collective impact.",
    icon: "🌍"
  }
];

export const MobileAppPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Content */}
            <div className="lg:col-span-6">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Your Smart Waste
                  <span className="block text-primary-600 mt-2">Management App</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                  Transform your recycling habits with our intelligent mobile app. Track, optimize, and earn rewards for sustainable waste management.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                  {/* App Store Button */}
                  <button className="inline-flex items-center px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-all duration-200">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </button>
                  {/* Play Store Button */}
                  <button className="inline-flex items-center px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-all duration-200">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Play Store
                  </button>
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="lg:col-span-6 mt-16 lg:mt-0">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[60px] border-[14px] border-black overflow-hidden shadow-2xl transform rotate-6">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-primary-50">
                    {/* App UI Mockup */}
                    <div className="p-4">
                      <div className="h-12 flex items-center justify-between">
                        <div className="w-24 h-4 bg-primary-200 rounded-full" />
                        <div className="flex space-x-2">
                          <div className="w-4 h-4 bg-primary-200 rounded-full" />
                          <div className="w-4 h-4 bg-primary-200 rounded-full" />
                        </div>
                      </div>
                      <div className="mt-6 space-y-4">
                        <div className="h-32 bg-white rounded-xl shadow-sm" />
                        <div className="h-24 bg-white rounded-xl shadow-sm" />
                        <div className="h-24 bg-white rounded-xl shadow-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary-200 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary-200 rounded-full blur-3xl opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Smart Features for Smart Living
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to manage waste efficiently in one app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appFeatures.map((feature, index) => (
              <div 
                key={index}
                className="relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Interface Preview Section */}
      {/* MobileAppLandingPage component removed as it's not available */}
    </div>
  );
}; 