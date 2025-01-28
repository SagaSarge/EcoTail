import { collection, doc, setDoc, getDoc, updateDoc, onSnapshot, query, where, orderBy, DocumentData } from 'firebase/firestore';
import { db } from '../config/firebase';

// Types
export interface UserProfile {
  id: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date;
  lastLoginAt: Date;
  stats: {
    totalWasteReduced: number;
    impactScore: number;
    challengesCompleted: number;
    streakDays: number;
  };
}

export interface WasteEntry {
  id: string;
  userId: string;
  type: 'plastic' | 'paper' | 'glass' | 'metal' | 'organic';
  quantity: number;
  unit: 'kg' | 'items';
  date: Date;
  notes?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  impact: number;
  duration: number; // in days
  category: string;
  participants: number;
}

// Collection References
export const usersRef = collection(db, 'users');
export const wasteEntriesRef = collection(db, 'wasteEntries');
export const challengesRef = collection(db, 'challenges');

// User Operations
export const createUserProfile = async (userId: string, data: Partial<UserProfile>) => {
  const userDoc = doc(usersRef, userId);
  const defaultProfile: UserProfile = {
    id: userId,
    email: data.email || '',
    displayName: data.displayName || null,
    photoURL: data.photoURL || null,
    createdAt: new Date(),
    lastLoginAt: new Date(),
    stats: {
      totalWasteReduced: 0,
      impactScore: 0,
      challengesCompleted: 0,
      streakDays: 0,
    },
  };

  await setDoc(userDoc, { ...defaultProfile, ...data });
  return defaultProfile;
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const userDoc = doc(usersRef, userId);
  const snapshot = await getDoc(userDoc);
  return snapshot.exists() ? (snapshot.data() as UserProfile) : null;
};

export const updateUserProfile = async (userId: string, data: Partial<UserProfile>) => {
  const userDoc = doc(usersRef, userId);
  await updateDoc(userDoc, { ...data, lastLoginAt: new Date() });
};

// Waste Entry Operations
export const addWasteEntry = async (data: Omit<WasteEntry, 'id'>) => {
  const newEntryRef = doc(wasteEntriesRef);
  const entry: WasteEntry = {
    ...data,
    id: newEntryRef.id,
  };
  await setDoc(newEntryRef, entry);
  return entry;
};

export const getUserWasteEntries = (userId: string, callback: (entries: WasteEntry[]) => void) => {
  const q = query(
    wasteEntriesRef,
    where('userId', '==', userId),
    orderBy('date', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const entries = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as WasteEntry[];
    callback(entries);
  });
};

// Challenge Operations
export const getChallenges = (callback: (challenges: Challenge[]) => void) => {
  return onSnapshot(challengesRef, (snapshot) => {
    const challenges = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Challenge[];
    callback(challenges);
  });
}; 