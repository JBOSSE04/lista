// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { VueFire, VueFireAuth } from 'vuefire';
import firebaseApp from './firebase.js';
import { createRouter, createWebHistory } from 'vue-router';
import { getCurrentUser } from 'vuefire';

// Importar componentes
import Landing from './components/landing.vue';
import Recordatorios from './components/recordatorios.vue';

// Definir rutas
const routes = [
  { path: '/', component: Landing, meta: { requiresAuth: false } },
  { path: '/recordatorios', component: Recordatorios, meta: { requiresAuth: true } },
];

// Crear instancia de router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Proteger rutas
router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser();

  if (to.meta.requiresAuth && !user) {
    // Redirigir a la página de inicio si el usuario no está autenticado
    next({ path: '/' });
  } else {
    next();
  }
});

// Crear la aplicación de Vue
const app = createApp(App);

app.use(VueFire, {
  firebaseApp,
  modules: [
    // Habilitar la autenticación con VueFire
    VueFireAuth(),
  ],
});

app.use(router);
app.mount('#app');
  