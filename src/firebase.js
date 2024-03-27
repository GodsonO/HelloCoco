import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAthWzMzurAj_pb_rfQjdAgGYeh6hdsLzY",
  authDomain: "hellococo-bf51b.firebaseapp.com",
  projectId: "hellococo-bf51b",
  storageBucket: "hellococo-bf51b.appspot.com",
  messagingSenderId: "1035767090820",
  appId: "1:1035767090820:web:a353f3f5d64a950bd77cd1",
  measurementId: "G-W9YTYBT5FB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();