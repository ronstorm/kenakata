// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI7TbAu8HVoYAjp8Sq-yOHTZU0-GsEhMg",
  authDomain: "kenakata-db.firebaseapp.com",
  projectId: "kenakata-db",
  storageBucket: "kenakata-db.appspot.com",
  messagingSenderId: "596493168002",
  appId: "1:596493168002:web:a1f9cba8552c1df2e7b39b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider);
}