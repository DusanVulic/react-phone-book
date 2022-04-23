import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAS3JVS4xScQ-2tzp9rDfdCuCsJ5YVYJUA",
    authDomain: "myphonebook-af5f1.firebaseapp.com",
    projectId: "myphonebook-af5f1",
    storageBucket: "myphonebook-af5f1.appspot.com",
    messagingSenderId: "691662776596",
    appId: "1:691662776596:web:aadae4c25ee9e37dda7a01",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services

const projectFIrestore = firebase.firestore();
//init auth
const projectAuth = firebase.auth();

export { projectFIrestore, projectAuth };