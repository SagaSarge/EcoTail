import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : undefined;

if (!serviceAccount) {
  console.warn('Firebase service account not found. Some features may not work.');
}

const app = initializeApp({
  credential: serviceAccount ? cert(serviceAccount) : undefined,
  projectId: process.env.FIREBASE_PROJECT_ID,
});

export const db = getFirestore(app);
export const auth = getAuth(app); 