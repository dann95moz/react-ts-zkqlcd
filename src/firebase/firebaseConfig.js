import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/getFirestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5f55LwaBM6YR1NUCrAKOp_vJJI56x0RM",
  authDomain: "presencial-78231.firebaseapp.com",
  projectId: "presencial-78231",
  storageBucket: "presencial-78231.appspot.com",
  messagingSenderId: "1018223511520",
  appId: "1:1018223511520:web:57759089fbba7b5afe8d85"
};
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export{
  app,
  google,
  db
}