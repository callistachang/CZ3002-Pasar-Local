import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdr6ydvcRgAglZJbJgqzQpDaZE6YBg21c",
  authDomain: "ase-smartlocal-backend-db.firebaseapp.com",
  projectId: "ase-smartlocal-backend-db",
  storageBucket: "ase-smartlocal-backend-db.appspot.com",
  messagingSenderId: "791112903848",
  appId: "1:791112903848:web:ff00d725a51f2caa7de69d",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
