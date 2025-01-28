import { create } from 'zustand';

interface AppFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface AppStats {
  id: string;
  value: string;
  label: string;
  trend: number;
}

interface MobileAppState {
  features: AppFeature[];
  stats: AppStats[];
  currentTheme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useMobileAppStore = create<MobileAppState>((set) => ({
  features: [
    {
      id: 'analytics',
      title: 'Smart Analytics',
      description: 'Track your waste reduction journey with AI-powered insights',
      icon: 'chart-bar',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'gamification',
      title: 'Green Rewards',
      description: 'Earn points and compete in eco-challenges',
      icon: 'trophy',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'recommendations',
      title: 'AI Recommendations',
      description: 'Get personalized tips for waste reduction',
      icon: 'lightbulb',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'community',
      title: 'Community Impact',
      description: 'Join forces with others for bigger environmental impact',
      icon: 'users',
      color: 'from-rose-500 to-pink-600'
    }
  ],
  stats: [
    {
      id: 'users',
      value: '50K+',
      label: 'Active Users',
      trend: 12
    },
    {
      id: 'waste',
      value: '120T',
      label: 'Waste Reduced',
      trend: 8
    },
    {
      id: 'challenges',
      value: '1.2K',
      label: 'Challenges Completed',
      trend: 15
    }
  ],
  currentTheme: 'light',
  setTheme: (theme) => set({ currentTheme: theme })
})); 