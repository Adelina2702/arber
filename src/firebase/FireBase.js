import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAL9IHVRkO-M3ySRa8-lpla3iYTrYom9ZI",
    authDomain: "pets-5f34a.firebaseapp.com",
    projectId: "pets-5f34a",
    storageBucket: "pets-5f34a.appspot.com",
    messagingSenderId: "257292838580",
    appId: "1:257292838580:web:d4e1ab9c0cf92bfaf9d9e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()