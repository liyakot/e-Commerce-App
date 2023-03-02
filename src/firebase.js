import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjPzRk2qDi73WvVzX-UUB4Y3Hmmr7x2XM",

  authDomain: "e-commerce-d6bae.firebaseapp.com",

  projectId: "e-commerce-d6bae",

  storageBucket: "e-commerce-d6bae.appspot.com",

  messagingSenderId: 37590906133,

  appId: "1:37590906133:web:a79aa6f49e1a5484d0251c",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
