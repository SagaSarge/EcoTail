import React, { Suspense, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigationStore, AppRoute } from '../../stores/appNavigationStore';
import { useLoadingStore } from '../../stores/loadingStore';
import { RouteGuard } from '../../utils/routeGuards';
import { errorTracker } from '../../utils/errorTracking';
import { ErrorBoundary } from '../common/ErrorBoundary';
import { DashboardSkeleton } from './skeletons/DashboardSkeleton';

// Import Dashboard directly since it's the initial route
import Dashboard from './pages/Dashboard';

// Lazy load other pages for better initial load performance
const Analytics = React.lazy(() => import('./pages/Analytics').then(module => ({ default: module.default || module })));
const Gamification = React.lazy(() => import('./pages/Gamification').then(module => ({ default: module.default || module })));
const Recommendations = React.lazy(() => import('./pages/Recommendations').then(module => ({ default: module.default || module })));
const Community = React.lazy(() => import('./pages/Community').then(module => ({ default: module.default || module })));
const Profile = React.lazy(() => import('./pages/Profile').then(module => ({ default: module.default || module })));

// Map routes to their skeleton components
const skeletonMap: Record<AppRoute, React.FC> = {
  dashboard: DashboardSkeleton,
  analytics: DashboardSkeleton, // Replace with AnalyticsSkeleton when created
  gamification: DashboardSkeleton, // Replace with GamificationSkeleton when created
  recommendations: DashboardSkeleton, // Replace with RecommendationsSkeleton when created
  community: DashboardSkeleton, // Replace with CommunitySkeleton when created
  profile: DashboardSkeleton, // Replace with ProfileSkeleton when created
};

const LoadingFallback = ({ route }: { route: AppRoute }) => {
  const { loadingText, progress } = useLoadingStore();
  const SkeletonComponent = skeletonMap[route];
  
  return (
    <div className="h-full">
      <SkeletonComponent />
      {(loadingText || progress !== undefined) && (
        <div className="fixed bottom-4 left-4 right-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="bg-gray-800 text-white rounded-lg p-4 shadow-lg"
          >
            <div className="space-y-2">
              {loadingText && (
                <p className="text-sm text-center">{loadingText}</p>
              )}
              {progress !== undefined && (
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-blue-500"
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.2 }
};

const LazyPage: React.FC<{ 
  component: React.LazyExoticComponent<any>;
  route: AppRoute;
}> = ({ component: Component, route }) => {
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    const loadComponent = async () => {
      try {
        setLoading(true, `Loading ${route}...`);
        await RouteGuard.beforeRouteEnter(route);
        setLoading(false);
      } catch (error) {
        errorTracker.logError(error as Error);
        setLoading(false);
      }
    };

    loadComponent();

    return () => {
      RouteGuard.beforeRouteLeave(route);
    };
  }, [route, setLoading]);

  if (!RouteGuard.canActivate(route)) {
    return <Dashboard />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback route={route} />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export const AppRouter: React.FC = () => {
  const { currentRoute } = useNavigationStore();
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(false);
  }, [currentRoute, setLoading]);

  const renderRoute = (route: AppRoute) => {
    try {
      switch (route) {
        case 'dashboard':
          return (
            <ErrorBoundary>
              <Dashboard />
            </ErrorBoundary>
          );
        case 'analytics':
          return <LazyPage component={Analytics} route={route} />;
        case 'gamification':
          return <LazyPage component={Gamification} route={route} />;
        case 'recommendations':
          return <LazyPage component={Recommendations} route={route} />;
        case 'community':
          return <LazyPage component={Community} route={route} />;
        case 'profile':
          return <LazyPage component={Profile} route={route} />;
        default:
          return (
            <ErrorBoundary>
              <Dashboard />
            </ErrorBoundary>
          );
      }
    } catch (error) {
      errorTracker.logError(error as Error);
      return (
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      );
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