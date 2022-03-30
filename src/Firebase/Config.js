import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC_GJeWiYPyJ0seiQxGJod4OHwsJ37JcHU",
    authDomain: "olx-clone-react-23bb1.firebaseapp.com",
    projectId: "olx-clone-react-23bb1",
    storageBucket: "olx-clone-react-23bb1.appspot.com",
    messagingSenderId: "990028091377",
    appId: "1:990028091377:web:a6b1460eb58d2b5a427e50",
    measurementId: "G-XPLBPGD45N"
  };

  export default firebase.initializeApp(firebaseConfig)