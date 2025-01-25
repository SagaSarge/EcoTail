import { useCallback } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  additionalData?: Record<string, any>;
}

export const useAnalytics = () => {
  const trackEvent = useCallback(({ action, category, label, value, additionalData }: AnalyticsEvent) => {
    // TODO: Replace with your actual analytics implementation (Google Analytics, Mixpanel, etc.)
    console.log('Analytics Event:', {
      action,
      category,
      label,
      value,
      additionalData,
      timestamp: new Date().toISOString(),
    });

    // Example implementation for Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...additionalData,
      });
    }
  }, []);

  const trackPurchaseClick = useCallback((source: string, additionalData?: Record<string, any>) => {
    trackEvent({
      action: 'purchase_button_click',
      category: 'conversion',
      label: source,
      additionalData: {
        page_location: window.location.pathname,
        ...additionalData,
      },
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPurchaseClick,
  };
}; 