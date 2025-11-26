import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7Y_4U-NxlkZkiCPW-jT-3pNV3X7yvrg0",
  authDomain: "callsystem-b726d.firebaseapp.com",
  projectId: "callsystem-b726d",
  storageBucket: "callsystem-b726d.firebasestorage.app",
  messagingSenderId: "930283097776",
  appId: "1:930283097776:web:8a06e0ffd38c75d1323575",
}

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };