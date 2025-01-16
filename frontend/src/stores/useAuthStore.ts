import { create } from 'zustand';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile as firebaseUpdateProfile,
} from 'firebase/auth';
import { auth } from '../lib/firebase/config';
import type { AuthStore } from '../types/auth';

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  error: null,

  signIn: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  signUp: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  signOut: async () => {
    try {
      set({ isLoading: true, error: null });
      await firebaseSignOut(auth);
      set({ user: null, isLoading: false });
    } catch (error) {
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  resetPassword: async (email: string) => {
    try {
      set({ isLoading: true, error: null });
      await sendPasswordResetEmail(auth, email);
      set({ isLoading: false });
    } catch (error) {
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },

  updateProfile: async (data) => {
    try {
      set({ isLoading: true, error: null });
      if (!auth.currentUser) throw new Error('No user logged in');
      
      await firebaseUpdateProfile(auth.currentUser, data);
      set({ user: auth.currentUser, isLoading: false });
    } catch (error) {
      set({ error: error as Error, isLoading: false });
      throw error;
    }
  },
})); 