import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn('VITE_FIREBASE_API'),
    authDomain: "blog-web-da077.firebaseapp.com",
    projectId: "blog-web-da077",
    storageBucket: "blog-web-da077.firebasestorage.app",
    messagingSenderId: "974227121160",
    appId: "1:974227121160:web:c54a8cf2677006717a5dbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBqpU4gy1t_1s8e7b80wANqhY4Q9tHVwKE",
//     authDomain: "blog-web-da077.firebaseapp.com",
//     projectId: "blog-web-da077",
//     storageBucket: "blog-web-da077.firebasestorage.app",
//     messagingSenderId: "974227121160",
//     appId: "1:974227121160:web:c54a8cf2677006717a5dbd"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);