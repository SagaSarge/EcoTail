import { User } from 'firebase/auth';

export interface AppSettings {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

export interface UserPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export interface UIState {
  theme: 'light' | 'dark';
  isSidebarOpen: boolean;
  notifications: Notification[];
}

export interface AppState {
  settings: AppSettings;
  preferences: UserPreferences;
} 