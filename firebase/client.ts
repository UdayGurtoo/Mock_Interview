import { getApp, getApps, initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCFZr38U78oRXwnidX76hVq6ZyXAsKR5_Y",
  authDomain: "mockinterview-214b1.firebaseapp.com",
  projectId: "mockinterview-214b1",
  storageBucket: "mockinterview-214b1.firebasestorage.app",
  messagingSenderId: "619702821978",
  appId: "1:619702821978:web:43d270410f4799f0b16463",
  measurementId: "G-WDC0BWVJCK"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);