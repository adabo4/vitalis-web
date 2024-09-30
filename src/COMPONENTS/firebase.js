import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyBqCoZOmgfv-b5Rcqf4FyiRV1D70GmQQbE",
//     authDomain: "datepicker-c2e77.firebaseapp.com",
//     projectId: "datepicker-c2e77",
//     storageBucket: "datepicker-c2e77.appspot.com",
//     messagingSenderId: "499059831301",
//     appId: "1:499059831301:web:4c99e8c3b13844253b626c"
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
export const database = getDatabase(app);
export const auth = getAuth(app); 