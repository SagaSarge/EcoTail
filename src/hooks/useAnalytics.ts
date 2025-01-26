import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as analytics from '../config/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    analytics.pageview(location.pathname + location.search);
  }, [location]);

  // Track specific events
  const trackEvent = (event: analytics.AnalyticsEvent) => {
    analytics.event(event);
  };

  // Predefined events for common actions
  const trackRecyclingAction = (action: string, value?: number) => {
    trackEvent({
      action,
      category: 'recycling',
      label: 'user_action',
      value,
    });
  };

  const trackEngagement = (action: string) => {
    trackEvent({
      action,
      category: 'engagement',
      label: 'user_interaction',
    });
  };

  const trackAchievement = (achievement: string, value?: number) => {
    trackEvent({
      action: 'achievement_unlocked',
      category: 'achievements',
      label: achievement,
      value,
    });
  };

  const trackPurchaseClick = (source: string, additionalData?: Record<string, any>) => {
    trackEvent({
      action: 'purchase_button_click',
      category: 'conversion',
      label: source,
      value: additionalData?.value,
      nonInteraction: false,
    });
  };

  return {
    trackEvent,
    trackRecyclingAction,
    trackEngagement,
    trackAchievement,
    trackPurchaseClick,
  };
}; 