import { create } from 'zustand';

export type AppRoute = 'dashboard' | 'analytics' | 'gamification' | 'recommendations' | 'community' | 'profile';

interface NavigationState {
  currentRoute: AppRoute;
  previousRoute: AppRoute | null;
  setRoute: (route: AppRoute) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentRoute: 'dashboard',
  previousRoute: null,
  setRoute: (route) =>
    set((state) => ({
      currentRoute: route,
      previousRoute: state.currentRoute,
    })),
})); 