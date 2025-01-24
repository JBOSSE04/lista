<template>
    <div class="login-container">
      <div v-if="user" class="welcome">
        <p>Hola, {{ user.displayName }}</p>
        <button @click="cerrarSesion" class="btn btn-secondary">Cerrar Sesión</button>
      </div>
  
      <div v-else class="auth-options">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="loginWithEmail" class="auth-form">
          <input
            v-model="email"
            type="email"
            placeholder="Correo electrónico"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            required
          />
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
  
        <p>o utiliza uno de estos métodos:</p>
        <div class="social-login">
          <button @click="loginWithGoogle" class="btn btn-google">Google</button>
          <button @click="loginWithGithub" class="btn btn-github">GitHub</button>
        </div>
  
        <h2>Registrarse</h2>
        <form @submit.prevent="registerWithEmail" class="auth-form">
          <input
            v-model="email"
            type="email"
            placeholder="Correo electrónico"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            required
          />
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Repetir contraseña"
            required
          />
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <button type="submit" class="btn btn-secondary">Registrarse</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { useFirebaseAuth, useCurrentUser } from "vuefire";
  import { useRouter } from "vue-router";
  
  const auth = useFirebaseAuth();
  const user = useCurrentUser();
  const router = useRouter();
  
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const errorMessage = ref("");
  
  // metodos de autenticación
  async function loginWithEmail() {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      console.log("Inicio de sesión exitoso");
      // redirige despuas de iniciar sesion
      router.push("/recordatorios"); 
    } catch (error) {
      errorMessage.value = "Error al iniciar sesión: " + error.message;
      console.error("Error al iniciar sesión:", error);
    }
  }
  
  async function registerWithEmail() {
    if (password.value !== confirmPassword.value) {
      errorMessage.value = "Las contraseñas no coinciden.";
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      console.log("Usuario registrado exitosamente");
      router.push("/recordatorios");
    } catch (error) {
      errorMessage.value = "Error al registrar usuario: " + error.message;
      console.error("Error al registrar usuario:", error);
    }
  }
  
  async function loginWithGoogle() {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      console.log("Inicio de sesión con Google exitoso");
      router.push("/recordatorios");
    } catch (error) {
      errorMessage.value = "Error al iniciar sesión con Google: " + error.message;
      console.error("Error al iniciar sesión con Google:", error);
    }
  }
  
  async function loginWithGithub() {
    try {
      await signInWithPopup(auth, githubAuthProvider);
      console.log("Inicio de sesión con GitHub exitoso");
      router.push("/recordatorios"); 
    } catch (error) {
      errorMessage.value = "Error al iniciar sesión con GitHub: " + error.message;
      console.error("Error al iniciar sesión con GitHub:", error);
    }
  }
  
  async function cerrarSesion() {
    try {
      await signOut(auth);
      router.push("/"); 
      console.log("Sesión cerrada correctamente");
    } catch (error) {
      errorMessage.value = "Error al cerrar sesión: " + error.message;
      console.error("Error al cerrar sesión:", error);
    }
  }
  </script>
  
  <style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: #f4f4f9;
}

.auth-options {
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.auth-form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  text-align: left;
}

.btn {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-google {
  background-color: #db4437;
  color: #fff;
}

.btn-google:hover {
  background-color: #c23321;
}

.btn-github {
  background-color: #333;
  color: #fff;
}

.btn-github:hover {
  background-color: #24292e;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
