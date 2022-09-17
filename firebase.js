// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMel0KGNwqAgWhQmPuW35K9pHvh9qYXY4",
  authDomain: "uber-next-clone-d0bc5.firebaseapp.com",
  projectId: "uber-next-clone-d0bc5",
  storageBucket: "uber-next-clone-d0bc5.appspot.com",
  messagingSenderId: "550720378364",
  appId: "1:550720378364:web:403465513b252b6bd70e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider()
const auth = getAuth()

export{app,provider,auth}