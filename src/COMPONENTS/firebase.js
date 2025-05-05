import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};


let app, db, auth, database

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    database = getDatabase(app);
} catch (error) {
    console.error("Firebase initialization error", error);

}

onAuthStateChanged(auth, (user) => {
    if (!user) {
        signInAnonymously(auth)
            .then(() => {
                console.log("Signed in anonymously");
            })
            .catch((error) => {
                console.error("Anonymous sign-in failed", error);
            });
    } else {
        console.log("User already signed in.");
    }
});


export { db, auth, database };