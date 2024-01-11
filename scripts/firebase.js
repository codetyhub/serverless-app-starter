  const firebaseConfig = {
    apiKey: "**",
    authDomain: "**",
    projectId: "**",
    storageBucket: "**",
    messagingSenderId: "**",
    appId: "**",
    measurementId: "**"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
