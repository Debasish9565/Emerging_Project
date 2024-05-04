// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: "yoga-master-demo-ec920",
  storageBucket: "yoga-master-demo-ec920.appspot.com",
  messagingSenderId: "535429997098",
  appId: "1:535429997098:web:a4b1964b701904e9de1953"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);