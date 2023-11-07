// Firebase auth config
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// Firestore cloud db

import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBoILqFY0XbEEUKn9OUQLZnNySTPIzFdto",
    authDomain: import.meta.env.AUTH_DOMAIN,
    projectId: "cointrackr-2ca3d",
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGING_SENDERID,
    appId: import.meta.env.APP_ID
  };


  const firebaseApp  = firebase.initializeApp(firebaseConfig)
  
  const projectFirestore = getFirestore(firebaseApp)
  const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }

