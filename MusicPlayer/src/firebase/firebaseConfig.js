import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAqyIvGsINbqkl9gXWBSDW0wDlawuw-3Nw",
    authDomain: "musicdb-3dc30.firebaseapp.com",
    projectId: "musicdb-3dc30",
    storageBucket: "musicdb-3dc30.appspot.com",
    messagingSenderId: "744002115416",
    appId: "1:744002115416:web:776450282038fa793ff72d"
});

export function getFirebase() {
  return app;
}

export const getFirestore = () => {
  return firebase.firestore(app);
};
const db = firebase.firestore();
export default db