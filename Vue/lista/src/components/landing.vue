<template>
  <div class="landing-container">
    <header class="landing-header">
      <h1 class="landing-title">TASKsSafer</h1>
      <p class="landing-subtitle">Organiza tus tareas</p>
      <button class="cta-button" @click="navigateToApp">Comenzar</button>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function navigateToApp() {
  router.push("/recordatorios");
}
</script>

<style scoped>
.landing-container {
  text-align: center;
  padding: 20px;
}

.landing-header {
  background: linear-gradient(135deg, #c6ff5b, #777777);
  color: #fff;
  padding: 60px 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.landing-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.landing-subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #fc5959;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: #ff5252;
  transform: scale(1.05);
}
</style>
