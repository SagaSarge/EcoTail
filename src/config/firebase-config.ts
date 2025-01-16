import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDQ7w-f3vB4WLuhFB3zVd7sgkGWHjWSJ0A",
  authDomain: "ecotail.firebaseapp.com",
  projectId: "ecotail",
  storageBucket: "ecotail.firebasestorage.app",
  messagingSenderId: "161364049188",
  appId: "1:161364049188:web:72b4cbbefdc766def987b1",
  measurementId: "G-L67HLVBWQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Export app instance if needed elsewhere
export default app; 