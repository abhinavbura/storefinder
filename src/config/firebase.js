import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-cK9rm3Xlx5jXvWM1iey_g4_aF1bVp8U",
  authDomain: "stagefd-26dd2.firebaseapp.com",
  projectId: "stagefd-26dd2",
  storageBucket: "stagefd-26dd2.appspot.com",
  messagingSenderId: "393509726262",
  appId: "1:393509726262:web:aa0dc394f213085bba1097",
  measurementId: "G-0ZVYVZM5RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)