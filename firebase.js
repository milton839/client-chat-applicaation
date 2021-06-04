import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDLhcYfVmduleYGQJFQKze4RMOUBO2Vds",
    authDomain: "client-chat-application.firebaseapp.com",
    projectId: "client-chat-application",
    storageBucket: "client-chat-application.appspot.com",
    messagingSenderId: "620416935474",
    appId: "1:620416935474:web:26042019beb40c08c2fe2b"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  }
  else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};