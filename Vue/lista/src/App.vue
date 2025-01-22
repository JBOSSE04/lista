<template>
  <Login />
  <nav>
    <RouterLink to="/recordatorios">Lista recordatorios</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { useRouter } from "vue-router";
import { getCurrentUser } from "vuefire";
import Login from "./components/Login.vue";

const router = useRouter();

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth) {
    const user = await getCurrentUser();
    if (!user) {
      router.push("/");
      return false;
    }
  }
  return true;
});
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

nav a {
  text-decoration: none;
  color: #313131;
  font-weight: bold;
  background-color: #c7ff5e;
  border-radius: 5%;
}

nav a:hover {
  color: #0056b3;
}
</style>
