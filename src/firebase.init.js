import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDvvXajOnNfjOQp9wgeh7xq-1PCgaehTYs",
    authDomain: "warehouse-management-c6755.firebaseapp.com",
    projectId: "warehouse-management-c6755",
    storageBucket: "warehouse-management-c6755.appspot.com",
    messagingSenderId: "869212706370",
    appId: "1:869212706370:web:e102e4853f1387e2b87fdb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;