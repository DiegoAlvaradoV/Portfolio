import firebase from 'firebase/app';
import 'firebase/firestore';

//Objeto de la configuración del proyecto Firestore
const config = {
    apiKey: "AIzaSyCMSeTRa36mtAYe9xPdxLbtMVRVrHIwRqo",
    authDomain: "portfolio-2d802.firebaseapp.com",
    projectId: "portfolio-2d802",
    storageBucket: "portfolio-2d802.appspot.com",
    messagingSenderId: "416191037682",
    appId: "1:416191037682:web:86389c85c555b55049106b"
};

//Instancia de la app ya inicializada
const app = firebase.initializeApp(config);

//Instancia de Firestore
export const firestore = firebase.firestore(app);