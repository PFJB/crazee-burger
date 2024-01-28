import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB30WrNzJxZ1IqnBw7X6aRJcx9q39wk8FU",
    authDomain: "crazee-burger-projet-92db2.firebaseapp.com",
    projectId: "crazee-burger-projet-92db2",
    storageBucket: "crazee-burger-projet-92db2.appspot.com",
    messagingSenderId: "641660156137",
    appId: "1:641660156137:web:38dd1c093cc43d6f3d9878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
