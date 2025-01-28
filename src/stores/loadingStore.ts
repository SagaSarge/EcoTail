import { create } from 'zustand';
import { errorTracker } from '../utils/errorTracking';

interface LoadingState {
  isLoading: boolean;
  loadingText?: string;
  progress?: number;
  errors: string[];
  setLoading: (isLoading: boolean, text?: string) => void;
  setProgress: (progress: number) => void;
  addError: (error: string) => void;
  clearErrors: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  loadingText: undefined,
  progress: undefined,
  errors: [],

  setLoading: (isLoading: boolean, text?: string) => {
    try {
      set({ isLoading, loadingText: text });
    } catch (error) {
      errorTracker.logError(error as Error);
    }
  },

  setProgress: (progress: number) => {
    try {
      set({ progress: Math.min(100, Math.max(0, progress)) });
    } catch (error) {
      errorTracker.logError(error as Error);
    }
  },

  addError: (error: string) => {
    try {
      set((state) => ({
        errors: [...state.errors, error]
      }));
    } catch (error) {
      errorTracker.logError(error as Error);
    }
  },

  clearErrors: () => {
    try {
      set({ errors: [] });
    } catch (error) {
      errorTracker.logError(error as Error);
    }
  }
})); 