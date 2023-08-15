// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvwDZdVRU4DWL8Dqyqneut7epbnDVea9w",
  authDomain: "mygitapp-2346d.firebaseapp.com",
  projectId: "mygitapp-2346d",
  storageBucket: "mygitapp-2346d.appspot.com",
  messagingSenderId: "868397244463",
  appId: "1:868397244463:web:586ebc9e042436f58626da",
  measurementId: "G-6E8X9VHKB1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth =getAuth();
// export  {app,auth};


export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();




