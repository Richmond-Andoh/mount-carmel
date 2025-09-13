// Firebase initialization for testimony feature
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7Geqk5TAwrvxHYdZraYscRfBkXB0xdJo",
  authDomain: "testimony-fe7c9.firebaseapp.com",
  projectId: "testimony-fe7c9",
  storageBucket: "testimony-fe7c9.firebasestorage.app",
  messagingSenderId: "692191577645",
  appId: "1:692191577645:web:b9eae8656fcd9da5951aa4",
  measurementId: "G-03EDZX0B4C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB7Geqk5TAwrvxHYdZraYscRfBkXB0xdJo",
//   authDomain: "testimony-fe7c9.firebaseapp.com",
//   projectId: "testimony-fe7c9",
//   storageBucket: "testimony-fe7c9.firebasestorage.app",
//   messagingSenderId: "692191577645",
//   appId: "1:692191577645:web:b9eae8656fcd9da5951aa4",
//   measurementId: "G-03EDZX0B4C"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
