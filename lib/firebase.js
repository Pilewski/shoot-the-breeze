import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6GhDhJeanwrygl6wPHYS3ZdIw44eqTCk",
    authDomain: "shoot-the-breeze-38e34.firebaseapp.com",
    databaseURL: "https://shoot-the-breeze-38e34.firebaseio.com",
    storageBucket: "shoot-the-breeze-38e34.appspot.com",
    messagingSenderId: "74352465571"
  };

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
