import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBr2KEKk5zt_poKnzOkzCqzsuBQQKRMeUg",
    authDomain: "chat-app-cda46.firebaseapp.com",
    projectId: "chat-app-cda46",
    storageBucket: "chat-app-cda46.appspot.com",
    messagingSenderId: "526824673366",
    appId: "1:526824673366:web:e37a585eefaa554908abf7",
    measurementId: "G-KN0VCVD0QV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// if (window.location.hostname === 'localhost') {
//   // auth.useEmulator('http://localhost:9099');
//   // db.useEmulator('localhost', '8080');
// }

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', '8080')
}

export { db, auth };
export default firebase;