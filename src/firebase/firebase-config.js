// importaciones e instalaciones necesarias para utilizar firebase: '$ npm install firebase@8.10.0'
//esta es la version 8.10.0, no es la actual. se requiere investigar los cambios para poder implementarlos
// esto se hace una vez, se debe crear un proyecto en firebase 'https://console.firebase.google.com/'

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

//configuracion obtenida de 'https://console.firebase.google.com/' en settings
const firebaseConfig = {
    apiKey: "AIzaSyAdwvw6DX-yybs1I66R6SOJDDGO_WiH638",
    authDomain: "react-app-cursos-e257f.firebaseapp.com",
    projectId: "react-app-cursos-e257f",
    storageBucket: "react-app-cursos-e257f.appspot.com",
    messagingSenderId: "355847423686",
    appId: "1:355847423686:web:e3602c227cd401e3c379c7"
  };
  
  
   firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore()

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }