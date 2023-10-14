import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAy6y8gzFQe3giwX1uBuotl80F84ceO93s",
  authDomain: "phone-otp-4b751.firebaseapp.com",
  projectId: "phone-otp-4b751",
  storageBucket: "phone-otp-4b751.appspot.com",
  messagingSenderId: "657110238438",
  appId: "1:657110238438:web:a12efb372d0e08a8b16727"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);