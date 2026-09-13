import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCPQ4U31pK_UXJS7bzQ78eDRHP847UvsU",
  authDomain: "vertex-store-1c5dc.firebaseapp.com",
  projectId: "vertex-store-1c5dc",
  storageBucket: "vertex-store-1c5dc.firebasestorage.app",
  messagingSenderId: "692990423564",
  appId: "1:692990423564:web:5d38dc56cab7d62f31f429"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)