import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBwYewXTtkudhZHWHGgAfeSmkieif14Aik',
  authDomain: 'card-maker-35ac7.firebaseapp.com',
  databaseURL: 'https://card-maker-35ac7-default-rtdb.firebaseio.com',
  projectId: 'card-maker-35ac7',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
