import { useEffect } from 'react';
import { auth } from '../config/firebase-config';
import { useAuthStore } from '../stores/auth-store';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const { user, isLoading, setUser, setLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  return { user, isLoading };
}; 