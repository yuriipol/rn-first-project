import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWmCWqKrGuESyM6nGADxf535DH9Lcqr-U",
  authDomain: "rn-chat-database.firebaseapp.com",
  projectId: "rn-chat-database",
  storageBucket: "rn-chat-database.appspot.com",
  messagingSenderId: "359079903777",
  appId: "1:359079903777:web:991804f558a580b44c9960",
  measurementId: "G-PQ8YTL50M1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
