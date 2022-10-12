import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBdLqxOhaWfQ7eyefLrVK7UiBsj5xzXY8s",
  authDomain: "pharmafleet.firebaseapp.com",
  projectId: "pharmafleet",
  storageBucket: "pharmafleet.appspot.com",
  messagingSenderId: "158560315618",
  appId: "1:158560315618:web:ea885729bff0651febd6bb",
  measurementId: "G-N7D2PKBMSN",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
