// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv1YnuxtoJo2-E5x8QEgeR6LFoL9CHI9o",
  authDomain: "iran-grill.firebaseapp.com",
  projectId: "iran-grill",
  storageBucket: "iran-grill.firebasestorage.app",
  messagingSenderId: "958455343404",
  appId: "1:958455343404:web:cec2103d84b18ffb18a489",
  measurementId: "G-4V1449G4LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication এবং সাথে সাথে Export করে দিন
export const auth = getAuth(app); 

// Initialize Analytics
export const analytics = getAnalytics(app);