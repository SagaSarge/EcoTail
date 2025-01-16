import { useCallback } from 'react';

export interface AnalyticsEvent {
  category: string;
  action: string;
  label: string;
  value?: number;
}

export function useAnalytics() {
  const trackPageView = useCallback((path: string): void => {
    console.log('Page View:', path);
  }, []);

  const trackEvent = useCallback((event: AnalyticsEvent): void => {
    console.log('Event:', event);
  }, []);

  return {
    trackPageView,
    trackEvent
  };
} 