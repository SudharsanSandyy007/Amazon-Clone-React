import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAVI75Sq2cD4QYszQjaEC8hmT76Xgk2ZI",
  authDomain: "clone-951ce.firebaseapp.com",
  projectId: "clone-951ce",
  storageBucket: "clone-951ce.appspot.com",
  messagingSenderId: "1067007755835",
  appId: "1:1067007755835:web:3dd79859766e1f44d93e1e",
  measurementId: "G-9C9V6DQQ4F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
