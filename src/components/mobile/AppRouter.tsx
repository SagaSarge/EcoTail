import React, { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigationStore, AppRoute } from '../../stores/appNavigationStore';
import { Dashboard } from './pages/Dashboard';
import { Card } from './ui/Card';

// Lazy load other pages for better initial load performance
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Gamification = React.lazy(() => import('./pages/Gamification'));
const Recommendations = React.lazy(() => import('./pages/Recommendations'));
const Community = React.lazy(() => import('./pages/Community'));
const Profile = React.lazy(() => import('./pages/Profile'));

const LoadingFallback = () => (
  <div className="h-full flex items-center justify-center">
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-gray-400">Loading...</span>
      </div>
    </Card>
  </div>
);

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.2 }
};

export const AppRouter: React.FC = () => {
  const { currentRoute } = useNavigationStore();

  const renderRoute = (route: AppRoute) => {
    switch (route) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Analytics />
          </Suspense>
        );
      case 'gamification':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Gamification />
          </Suspense>
        );
      case 'recommendations':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Recommendations />
          </Suspense>
        );
      case 'community':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Community />
          </Suspense>
        );
      case 'profile':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <Profile />
          </Suspense>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentRoute}
        {...pageTransition}
        className="h-full"
      >
        {renderRoute(currentRoute)}
      </motion.div>
    </AnimatePresence>
  );
}; 