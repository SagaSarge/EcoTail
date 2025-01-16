import { User as FirebaseUser } from 'firebase/auth';

export interface UserProfile extends FirebaseUser {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export interface AuthError {
  code: string;
  message: string;
} 