// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnUwBV5jeMixFRcZ5Gx1Vo9ZQjyULkm8k",
    authDomain: "project-react-login-e49ac.firebaseapp.com",
    projectId: "project-react-login-e49ac",
    storageBucket: "project-react-login-e49ac.appspot.com",
    messagingSenderId: "769969100775",
    appId: "1:769969100775:web:8f83a59bc88b23c8958f42"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;