import { User } from 'firebase/auth';

export interface AuthUser extends Omit<User, 'toJSON'> {
  role?: 'user' | 'admin';
}

export interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  error: Error | null;
}

export interface AuthStore extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<AuthUser>) => Promise<void>;
} 