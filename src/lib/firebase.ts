import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJTOiO-1iBq7t-C_p8A3IlSgobSQZ_7uE",
    authDomain: "my-portfolio-92483.firebaseapp.com",
    projectId: "my-portfolio-92483",
    storageBucket: "my-portfolio-92483.firebasestorage.app",
    messagingSenderId: "406713543010",
    appId: "1:406713543010:web:3c12ca7f8c962a1f4aa43b",
    measurementId: "G-K3WFFXM2E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
