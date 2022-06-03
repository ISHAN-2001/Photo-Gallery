import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-gallery-71b31.firebaseapp.com",
  projectId: "react-gallery-71b31",
  storageBucket: "react-gallery-71b31.appspot.com",
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export {projectStorage,projectFirestore }