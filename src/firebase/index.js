//import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebase  from '@firebase/app-compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDVr7DprWr59bt1mkc0SWvuMbL4zIBH0LQ",
    authDomain: "coderchopprosario.firebaseapp.com",
    projectId: "coderchopprosario",
    storageBucket: "coderchopprosario.appspot.com",
    messagingSenderId: "513435810853",
    appId: "1:513435810853:web:f58f0e259984db66f753cc"
  };

// Initialize Firebase y lo pongo en app
const app = firebase.initializeApp(firebaseConfig);

// getData devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);


