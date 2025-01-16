type EventName = 
  | 'feature_click' 
  | 'pre_order_click' 
  | 'feature_view' 
  | 'page_view'
  | 'error'

type EventData = Record<string, string | number | boolean>

/**
 * Hook for tracking analytics events in EcoTail
 * @returns Object containing tracking functions
 */
export function useAnalytics() {
  const trackEvent = (name: EventName, data?: EventData): void => {
    // In a real app, this would send data to your analytics service
    // For now, we'll just log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', {
        name,
        data,
        timestamp: new Date().toISOString(),
        path: window.location.pathname
      })
    }
  }

  return { trackEvent }
} 