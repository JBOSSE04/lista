

import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  orderBy, 
  getDocs 
} from "firebase/firestore";


// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_b65KyVSFyaLLgUYIEKgcACVJPtYlX1Y",
  authDomain: "poke-4755d.firebaseapp.com",
  projectId: "poke-4755d",
  storageBucket: "poke-4755d.firebasestorage.app",
  messagingSenderId: "597102332709",
  appId: "1:597102332709:web:b29e3e3eff2c8099a928cc",
  measurementId: "G-4161JCBJ8P"
};

// 🔹 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

/**
 * 🔹 REGISTRAR USUARIO CON EMAIL Y CONTRASEÑA
 */
const registerWithEmail = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar en Firestore en la colección "score"
    await setDoc(doc(db, "score", user.uid), {
      uid: user.uid,
      name,
      email,
      score: 0 // El usuario inicia con 0 puntos
    });

    return user;
  } catch (error) {
    console.error("Error al registrar:", error);
    throw error;
  }
};

/**
 * 🔹 INICIAR SESIÓN CON EMAIL Y CONTRASEÑA
 */
const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

/**
 * 🔹 INICIAR SESIÓN CON GOOGLE
 */
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Verificar si el usuario ya está en Firestore
    const userRef = doc(db, "score", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName || "Anónimo",
        email: user.email,
        score: 0 // Inicia con 0 puntos
      });
    }
    
    return user;
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    throw error;
  }
};

/**
 * 🔹 CERRAR SESIÓN
 */
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

const updateRanking = async (userId, newScore) => {
  try {
    const userRef = doc(db, "score", userId);
    await updateDoc(userRef, { score: newScore });
    console.log("Puntuación actualizada en Firestore:", newScore);
  } catch (error) {
    console.error("Error al actualizar el ranking:", error);
  }
};

/**
 * 🔹 OBTENER RANKING GLOBAL ORDENADO POR PUNTUACIoN
 */
const getRanking = async () => {
  try {
    const rankingRef = collection(db, "score");
    const rankingQuery = query(rankingRef, orderBy("score", "desc"));
    const querySnapshot = await getDocs(rankingQuery);

    if (querySnapshot.empty) {
      console.warn("El ranking está vacío.");
    }

    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener ranking:", error);
    return [];
  }
};


// 🔹 Exportar todas las funciones necesarias
export { auth, registerWithEmail, loginWithEmail, signInWithGoogle, logout, updateRanking, getRanking, db };
