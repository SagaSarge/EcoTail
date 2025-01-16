import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  DocumentData,
  DocumentReference
} from 'firebase/firestore';
import { db } from '../config/firebase-config';

export const firestoreService = {
  async createDocument<T extends DocumentData>(
    collectionName: string, 
    docId: string, 
    data: T
  ): Promise<void> {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, data);
  },

  async getDocument<T extends DocumentData>(
    collectionName: string, 
    docId: string
  ): Promise<T | null> {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as T) : null;
  },

  async updateDocument<T extends DocumentData>(
    collectionName: string, 
    docId: string, 
    data: Partial<T>
  ): Promise<void> {
    const docRef = doc(db, collectionName, docId) as DocumentReference<T>;
    await updateDoc(docRef, data as DocumentData);
  }
}; 