import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDQFRNKfYkFVTaXkLmexjXqQKiSaRbkqfw",
    authDomain: "tinder--clone-f0585.firebaseapp.com",
    databaseURL: "https://tinder--clone-f0585.firebaseio.com",
    projectId: "tinder--clone-f0585",
    storageBucket: "tinder--clone-f0585.appspot.com",
    messagingSenderId: "285963476944",
    appId: "1:285963476944:web:25d859f4c798ee12ae23d5",
    measurementId: "G-FLFVMPXPES"
  };
 
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;