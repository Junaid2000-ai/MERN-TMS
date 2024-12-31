// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "np-tms.firebaseapp.com",
  projectId: "np-tms",
  storageBucket: "np-tms.firebasestorage.app",
  messagingSenderId: "849948001893",
  appId: "1:849948001893:web:e1b758ccd3addc2b45a88c",
  measurementId: "G-EPYG9LSSRE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);