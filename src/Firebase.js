import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC502Uh4EpKKLZPUGQMb67HzsLrMxK1gss",
  authDomain: "clonelinkedin-51f0b.firebaseapp.com",
  projectId: "clonelinkedin-51f0b",
  storageBucket: "clonelinkedin-51f0b.appspot.com",
  messagingSenderId: "586349597662",
  appId: "1:586349597662:web:42b32e96fbc616e7ef834f"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };
