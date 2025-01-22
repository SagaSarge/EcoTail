import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileAppLandingPage } from './MobileAppLandingPage';

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Features for Smart Living
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Everything you need to manage waste efficiently in one app
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Real-time Tracking */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">
                Monitor your waste management and recycling progress in real-time with detailed analytics.
              </p>
            </div>

            {/* Smart Notifications */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Notifications</h3>
              <p className="text-gray-600">
                Get intelligent alerts for pickup schedules and recycling optimization opportunities.
              </p>
            </div>

            {/* Reward System */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reward System</h3>
              <p className="text-gray-600">
                Earn points and rewards for sustainable practices and consistent recycling habits.
              </p>
            </div>

            {/* Community Impact */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Impact</h3>
              <p className="text-gray-600">
                Connect with local sustainability initiatives and track your community's collective impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Landing Page Preview */}
      <MobileAppLandingPage />
    </div>
  );
}; 