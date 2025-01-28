import React from 'react';
import { motion } from 'framer-motion';
import { useAnalytics } from '../../hooks/useAnalytics';
import { Button } from '../common/Button';
import { PageHero } from '../common/PageHero';

export const MobileLandingPage: React.FC = () => {
  const { trackEvent } = useAnalytics();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleAppStoreClick = () => {
    trackEvent({
      action: 'click',
      category: 'download',
      label: 'app_store'
    });
  };

  const handlePlayStoreClick = () => {
    trackEvent({
      action: 'click',
      category: 'download',
      label: 'play_store'
    });
  };

  const handleContactClick = () => {
    trackEvent({
      action: 'click',
      category: 'contact',
      label: 'sales'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <PageHero
        title="EcoTail Mobile"
        subtitle="Smart Waste Management in Your Pocket"
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      />

      {/* App Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Feature Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-600">Track your waste management metrics and bin status in real-time from anywhere.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">Access detailed analytics and insights about your waste management performance.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
              <p className="text-gray-600">Receive instant alerts and updates about your waste bins and collection schedule.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
            <p className="text-lg mb-8">Download the EcoTail mobile app and take control of your waste management.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleAppStoreClick}
                variant="outline"
                className="flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-green-50"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Button>
              <Button
                onClick={handlePlayStoreClick}
                variant="outline"
                className="flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-green-50"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Play Store
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team to learn more about how EcoTail mobile can transform your waste management operations.
            </p>
            <Button
              onClick={handleContactClick}
              variant="primary"
              className="w-full sm:w-auto"
            >
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 