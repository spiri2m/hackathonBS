import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDjIozB3z4EtIsWy03DZ1lJ8wLzZE9UMYM",
    authDomain: "library-b83e3.firebaseapp.com",
    projectId: "library-b83e3",
    storageBucket: "library-b83e3.appspot.com",
    messagingSenderId: "668359565434",
    appId: "1:668359565434:web:3f4f7c75f82675e732dbc3"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)