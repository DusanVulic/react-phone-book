import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGJRqe5PdiaWsXU_8_WTQvMs9DOszQBww",
    authDomain: "myphonebook-eed98.firebaseapp.com",
    projectId: "myphonebook-eed98",
    storageBucket: "myphonebook-eed98.appspot.com",
    messagingSenderId: "132335112677",
    appId: "1:132335112677:web:4d77dec49cf77e93de1f0c",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init service

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };