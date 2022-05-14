import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjjJMy2BJzKTT-QA466m_tOiQ9WBEVZE4",
  authDomain: "sveltekit-firebase-auth-11230.firebaseapp.com",
  projectId: "sveltekit-firebase-auth-11230",
  storageBucket: "sveltekit-firebase-auth-11230.appspot.com",
  messagingSenderId: "61267089365",
  appId: "1:61267089365:web:f0f149fd02c78b366a4f5c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
