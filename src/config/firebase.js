// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "fir-contact-app-5496d.firebaseapp.com",
  projectId: "fir-contact-app-5496d",
  storageBucket: "fir-contact-app-5496d.appspot.com",
  messagingSenderId: "549872917254",
  appId: "1:549872917254:web:4c66a34b3b8570f5a15c87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)