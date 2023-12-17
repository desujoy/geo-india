// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApJA7fCKsudyOB8KTnXQciCKKC0lfgy0Y",
  authDomain: "geo-india-b4df4.firebaseapp.com",
  databaseURL: "https://geo-india-b4df4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "geo-india-b4df4",
  storageBucket: "geo-india-b4df4.appspot.com",
  messagingSenderId: "736885385779",
  appId: "1:736885385779:web:adc907b5427d6514de9146",
  measurementId: "G-98VGK1CPRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics.app.automaticDataCollectionEnabled = true;
export const db = getFirestore(app);