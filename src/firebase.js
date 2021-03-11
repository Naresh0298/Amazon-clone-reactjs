import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSWNQVKcwkE7fhYv_Gg-ZGAKG70iCu7SI",
  authDomain: "clone-7baf0.firebaseapp.com",
  projectId: "clone-7baf0",
  storageBucket: "clone-7baf0.appspot.com",
  messagingSenderId: "586227055018",
  appId: "1:586227055018:web:4d604163fb1707713193d3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
