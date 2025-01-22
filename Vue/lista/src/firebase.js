import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-bphnw4mw7NeYlL7Lsiu0yE9lQnHRnbA",
    authDomain: "lista-83868.firebaseapp.com",
    projectId: "lista-83868",
    storageBucket: "lista-83868.firebasestorage.app",
    messagingSenderId: "731725412358",
    appId: "1:731725412358:web:f20c6a6ebdd40a5623ab87",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default firebaseApp; 
export const tasks = collection(db, "lista");