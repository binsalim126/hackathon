import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDFvQFjVMImltN85QL6ovHtFW9vQvS_Fx8",
  authDomain: "hackthon-f6094.firebaseapp.com",
  projectId: "hackthon-f6094",
  storageBucket: "hackthon-f6094.firebasestorage.app",
  messagingSenderId: "945484600808",
  appId: "1:945484600808:web:d8aeb18323b2e2feb2005d",
  measurementId: "G-F5Z62S2L0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};
