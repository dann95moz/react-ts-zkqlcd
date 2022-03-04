import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/getFirestore';
import {initializeApp} from "firebase/app";

const app = initializeApp(firebaseConf);
const google = new GoogleAuthProvider();
const db = getFirestore();


const firebaseConf = {
  
}

export{
  app,
  google,
  db
}