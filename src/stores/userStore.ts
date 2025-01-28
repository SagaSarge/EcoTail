import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProfile, WasteEntry, Challenge, createUserProfile, getUserProfile, updateUserProfile, getUserWasteEntries, getChallenges } from '../services/firestore';
import { useAuthStore } from './authStore';
import { errorTracker } from '../utils/errorTracking';

interface UserState {
  profile: UserProfile | null;
  wasteEntries: WasteEntry[];
  challenges: Challenge[];
  loading: boolean;
  error: string | null;
  
  // Profile operations
  initializeProfile: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  
  // Data operations
  clearError: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      profile: null,
      wasteEntries: [],
      challenges: [],
      loading: false,
      error: null,

      initializeProfile: async () => {
        const user = useAuthStore.getState().user;
        if (!user) return;

        try {
          set({ loading: true, error: null });
          
          let profile = await getUserProfile(user.uid);
          if (!profile) {
            profile = await createUserProfile(user.uid, {
              email: user.email || '',
              displayName: user.displayName,
              photoURL: user.photoURL,
            });
          }
          
          set({ profile, loading: false });

          // Set up real-time listeners
          getUserWasteEntries(user.uid, (entries) => {
            set({ wasteEntries: entries });
          });

          getChallenges((challenges) => {
            set({ challenges });
          });
        } catch (error) {
          const errorMessage = (error as Error).message;
          errorTracker.logError(error as Error);
          set({ error: errorMessage, loading: false });
        }
      },

      updateProfile: async (data: Partial<UserProfile>) => {
        const { profile } = get();
        if (!profile) return;

        try {
          set({ loading: true, error: null });
          await updateUserProfile(profile.id, data);
          set({ profile: { ...profile, ...data }, loading: false });
        } catch (error) {
          const errorMessage = (error as Error).message;
          errorTracker.logError(error as Error);
          set({ error: errorMessage, loading: false });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        profile: state.profile,
        wasteEntries: state.wasteEntries,
        challenges: state.challenges,
      }),
    }
  )
);

// Set up auth state listener to initialize profile
useAuthStore.subscribe((state) => {
  if (state.user) {
    useUserStore.getState().initializeProfile();
  } else {
    useUserStore.setState({
      profile: null,
      wasteEntries: [],
      challenges: [],
    });
  }
}); 