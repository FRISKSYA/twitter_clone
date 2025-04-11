// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-72eb6.firebaseapp.com",
  projectId: "twitter-clone-72eb6",
  storageBucket: "twitter-clone-72eb6.firebasestorage.app",
  messagingSenderId: "91164100584",
  appId: "1:91164100584:web:63437fe01385e9b29fc65d",
  measurementId: "G-M930MHZKYR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);