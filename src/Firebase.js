import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDvNAhA4eFkbEOdexn7hUxU-Ny2o-ItuiE",
    authDomain: "assignment-1e5c3.firebaseapp.com",
    projectId: "assignment-1e5c3",
    storageBucket: "assignment-1e5c3.appspot.com",
    messagingSenderId: "364796545095",
    appId: "1:364796545095:web:af36583eada03a5ce70962",
    measurementId: "G-0D4XT634ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth()

export {app, auth}
