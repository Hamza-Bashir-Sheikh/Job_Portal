// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB36u0zO7cdDNa6Ht_fa1v_tQgJtsrkcjA",
  authDomain: "job-portal-demo-62c2b.firebaseapp.com",
  projectId: "job-portal-demo-62c2b",
  storageBucket: "job-portal-demo-62c2b.appspot.com",
  messagingSenderId: "279870126326",
  appId: "1:279870126326:web:c4872d0f8944bbf7ced4d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;