import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential 
} from 'firebase/auth';
import { auth } from '../config/firebase-config';

export const authService = {
  async signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  },

  async signUp(email: string, password: string, displayName: string): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    return userCredential;
  },

  async signOut(): Promise<void> {
    return auth.signOut();
  }
}; 