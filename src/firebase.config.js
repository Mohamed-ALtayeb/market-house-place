// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMyJyRpuS3LGzzaehYGCGMYNcltZwq0U4",
  authDomain: "house-market-place-78380.firebaseapp.com",
  projectId: "house-market-place-78380",
  storageBucket: "house-market-place-78380.appspot.com",
  messagingSenderId: "795794300962",
  appId: "1:795794300962:web:0b71743cf93148578eaa7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
