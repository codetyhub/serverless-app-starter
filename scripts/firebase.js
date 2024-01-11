const firebaseConfig = {
    apiKey: "AIzaSyCd5NfSGl6MPvSJNIMSPm0F6JLbqPd1dZg",
    authDomain: "codetyhub-firebase-demo.firebaseapp.com",
    projectId: "codetyhub-firebase-demo",
    storageBucket: "codetyhub-firebase-demo.appspot.com",
    messagingSenderId: "1081889698733",
    appId: "1:1081889698733:web:96fcedf4d88a44001a2724",
    measurementId: "G-38YPB1RKMD"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();