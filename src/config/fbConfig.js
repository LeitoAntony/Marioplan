import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmlhgXFJpuGeSLkw439IruW5OiJMStcak",
    authDomain: "net-ninja-marioplan-80078.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-80078.firebaseio.com",
    projectId: "net-ninja-marioplan-80078",
    storageBucket: "net-ninja-marioplan-80078.appspot.com",
    messagingSenderId: "602218545420"
  };

  firebase.initializeApp(config);
  //firebase.firestore().settings({timestampsInSnapshots: true })

  export default firebase;
  
