import React from 'react';
import { motion } from 'framer-motion';
import { useAnalytics } from '../../hooks/useAnalytics';
import { Button } from '../common/Button';
import { PhoneFrame } from '../mobile/PhoneFrame';
import { FeatureCard } from '../mobile/FeatureCard';
import { useMobileAppStore } from '../../stores/mobileAppStore';
import { AppLayout } from '../mobile/AppLayout';

export const MobileLandingPage: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const { features } = useMobileAppStore();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                EcoTale Mobile
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Transform your waste management journey with AI-powered insights and gamified sustainability.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAppStoreClick}
                  variant="primary"
                  className="flex items-center justify-center gap-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </Button>
                <Button
                  onClick={handlePlayStoreClick}
                  variant="primary"
                  className="flex items-center justify-center gap-2"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Play Store
                </Button>
              </div>
            </motion.div>

            {/* Phone Preview */}
            <div className="relative lg:ml-auto">
              <PhoneFrame>
                <AppLayout />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Revolutionary Features
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Experience the future of waste management with our innovative features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 