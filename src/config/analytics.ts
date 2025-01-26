export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Event types for better TypeScript support
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Event tracking
export const event = ({ action, category, label, value, nonInteraction = false }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: nonInteraction,
    });
  }
}; 