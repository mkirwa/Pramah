import firebase from "firebase/app";
// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFPkQO_YQXEe2Mw_KJXoNs6611aDcqo2c",
  authDomain: "jipe-app-f7aa9.firebaseapp.com",
  databaseURL: "https://jipe-app-f7aa9.firebaseio.com",
  projectId: "jipe-app-f7aa9",
  storageBucket: "jipe-app-f7aa9.appspot.com",
  messagingSenderId: "1081903124438",
  appId: "1:1081903124438:web:25533dbd2d9b7733901e77",
  measurementId: "G-6JQ2WH8QZE",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
