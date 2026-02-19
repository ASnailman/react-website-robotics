// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBdl9IBEYJTK343Cj9M5HImlKpVvLbDGw",
  authDomain: "howrobotics.firebaseapp.com",
  projectId: "howrobotics",
  storageBucket: "howrobotics.appspot.com",
  messagingSenderId: "360206272809",
  appId: "1:360206272809:web:cc2133221f1ec481748f38",
  measurementId: "G-S7QS5E5BXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };