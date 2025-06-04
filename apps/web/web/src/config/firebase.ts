import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCNdD374-i0gCrr8iF1_lpkM-XmgjzoSmU",
  authDomain: "united-we-can-67c72.firebaseapp.com",
  databaseURL: "https://united-we-can-67c72-default-rtdb.firebaseio.com",
  projectId: "united-we-can-67c72",
  storageBucket: "united-we-can-67c72.firebasestorage.app",
  messagingSenderId: "1027249835250",
  appId: "1:1027249835250:web:dba6a1f977ffb0be50146b",
  measurementId: "G-DEYPCCFXWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create authentication entrypoint
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Create firestore entrypoint
export const db = getFirestore(app);
// const analytics = getAnalytics(app);