import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBF27QOCn-iAx1cwv6SgltmVGAgW6jbLpk",
  authDomain: "react-gallery-71b31.firebaseapp.com",
  projectId: "react-gallery-71b31",
  storageBucket: "react-gallery-71b31.appspot.com",
  messagingSenderId: "492302448787",
  appId: "1:492302448787:web:d1782df38e2761c3b63566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export {projectStorage,projectFirestore }