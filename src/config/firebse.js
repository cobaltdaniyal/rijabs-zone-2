import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCQt8U265-lGF8QQ-vE0PgabptitGIEJ2s",
    authDomain: "rijab-zone.firebaseapp.com",
    projectId: "rijab-zone",
    storageBucket: "rijab-zone.appspot.com",
    messagingSenderId: "126593249000",
    appId: "1:126593249000:web:2fad91015dc2798058235d",
    measurementId: "G-96PK68XWDH"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };