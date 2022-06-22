import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA411cc8Zcwp4wrSH4Zp9FNBrDS-MmSN5w",
  authDomain: "hockeydashboard-a443f.firebaseapp.com",
  projectId: "hockeydashboard-a443f",
  storageBucket: "hockeydashboard-a443f.appspot.com",
  messagingSenderId: "818749654676",
  appId: "1:818749654676:web:2ce1d4dbdc41f8317d5681"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }
