import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAaMj_S9fUOvN5Fr74lwChXCttpjmCHSow",
  authDomain: "facebook-clone-9f488.firebaseapp.com",
  projectId: "facebook-clone-9f488",
  storageBucket: "facebook-clone-9f488.appspot.com",
  messagingSenderId: "687406643739",
  appId: "1:687406643739:web:41d05ac4fae24a7ff956be",
  measurementId: "G-HPP644HXVD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;