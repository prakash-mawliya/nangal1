// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Instructions for the user:
// 1. Go to https://console.firebase.google.com/
// 2. Create a NEW project (or use an existing one).
// 3. Register a web app (click the </> icon).
// 4. Copy the 'firebaseConfig' object from the console.
// 5. Paste it over the 'firebaseConfig' object above.
// 6. Go to "Firestore Database" in the sidebar.
// 7. Click "Create Database". Start in test mode for now.
// 8. Go to "Rules" tab in Firestore and ensure read/write is allowed (for testing):
//    allow read, write: if true;
