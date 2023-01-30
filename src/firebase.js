// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAztGsANQFCXok5LUMetNmZgECbV2zl1IA",
  authDomain: "twitter-f27d9.firebaseapp.com",
  projectId: "twitter-f27d9",
  storageBucket: "twitter-f27d9.appspot.com",
  messagingSenderId: "80079418739",
  appId: "1:80079418739:web:fa26db349da0d42aed4106",
  measurementId: "G-XW5H9VYLF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;