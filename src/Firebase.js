// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACPcKp347KZKOy8NYeygQZ4UOtph4tdIQ",
  authDomain: "twiitter-clone-d675f.firebaseapp.com",
  projectId: "twiitter-clone-d675f",
  storageBucket: "twiitter-clone-d675f.appspot.com",
  messagingSenderId: "739678890214",
  appId: "1:739678890214:web:d57b238b8f0bc14201b327",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();
//  export const providerApple = new OAuthProvider("apple.com");
