<template>
  <div class="container">
    <Cabecera
  :pendientes="pendientes"
  :total="total"
  @addTask="addTask"
  @clearTasks="clearCompleted"
/>
    <ListaTareas
      :tasks="tasks"
      @toggleStatus="toggleStatus"
      @deleteTask="deleteTask"
      @updatePriority="updatePriority"
    />
    <Pie />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useFirestore, useCollection, useCurrentUser } from "vuefire";
import { collection, query, where, orderBy, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import Cabecera from "./Cabecera.vue";
import ListaTareas from "./listaTareas.vue";
import Pie from "./Pie.vue";

const db = useFirestore();
const user = useCurrentUser();

const tasks = ref([]);
let tasksQuery = null;

// Monitorear cambios en el usuario autenticado
watch(
  user,
  (currentUser) => {
    if (currentUser && currentUser.uid) {
      console.log("Usuario autenticado:", currentUser.uid);

      // Configurar consulta de Firestore para el usuario autenticado
      tasksQuery = query(
        collection(db, "lista"),
        where("idUsuario", "==", currentUser.uid),
        orderBy("priority")
      );

      // Vincular la consulta a Firestore
      const firestoreTasks = useCollection(tasksQuery);

      // Sincronizar tareas con Firestore
      watch(
        firestoreTasks,
        (newTasks) => {
          tasks.value = newTasks.map((task) => ({
            id: task.id,
            ...task,
          }));
          console.log("Tareas recuperadas:", tasks.value);
        },
        { immediate: true }
      );
    } else {
      console.log("No hay usuario autenticado.");
      tasks.value = []; // Limpiar tareas si no hay usuario autenticado
    }
  },
  { immediate: true }
);

// Agregar una nueva tarea
async function addTask(newTask) {
  try {
    const docRef = await addDoc(collection(db, "lista"), {
      ...newTask,
      idUsuario: user.value.uid, // Vincular al usuario autenticado
    });
    await updateDoc(docRef, { id: docRef.id }); // Guardar el ID generado

    // Actualizar el estado local
    tasks.value.push({ ...newTask, id: docRef.id });
  } catch (error) {
    console.error("Error al agregar tarea:", error);
  }
}


// Cambiar el estado de completado
async function toggleStatus(task) {
  try {
    if (!task || !task.id) throw new Error("Tarea inválida o sin ID");
    const taskDoc = doc(db, "lista", task.id);
    await updateDoc(taskDoc, { completed: !task.completed });

    // Actualizar localmente
    const updatedTask = tasks.value.find((t) => t.id === task.id);
    if (updatedTask) updatedTask.completed = !updatedTask.completed;
  } catch (error) {
    console.error("Error al cambiar el estado de la tarea:", error);
  }
}

// Eliminar una tarea
async function deleteTask(task) {
  try {
    if (!task || !task.id) throw new Error("Tarea inválida o sin ID");
    const taskDoc = doc(db, "lista", task.id);
    await deleteDoc(taskDoc);

    // Actualizar estado local
    tasks.value = tasks.value.filter((t) => t.id !== task.id);
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
  }
}
//Borra la tarea/s ya completadas
async function clearCompleted() {
  try {
    // Filtrar las tareas completadas
    const completedTasks = tasks.value.filter((task) => task.completed);

    // Eliminar cada tarea completada de Firestore
    for (const task of completedTasks) {
      if (task.id) {
        const taskDoc = doc(db, "lista", task.id);
        await deleteDoc(taskDoc);
      }
    }

    // Actualizar estado local eliminando las completadas
    tasks.value = tasks.value.filter((task) => !task.completed);
  } catch (error) {
    console.error("Error al eliminar tareas completadas:", error);
  }
}


// Cambiar la prioridad de una tarea
async function updatePriority(task, priority) {
  try {
    if (!task || !task.id) throw new Error("Tarea inválida o sin ID");
    if (!priority) throw new Error("Prioridad no válida");

    // Actualizar Firestore
    const taskDoc = doc(db, "lista", task.id);
    await updateDoc(taskDoc, { priority });

    // Actualizar en local
    const updatedTask = tasks.value.find((t) => t.id === task.id);
    if (updatedTask) {
      updatedTask.priority = priority;

      // Reordenar tareas localmente
      tasks.value = [...tasks.value].sort((a, b) => {
        const priorityMap = { high: 3, normal: 2, low: 1 };
        return priorityMap[b.priority] - priorityMap[a.priority];
      });
    }
  } catch (error) {
    console.error("Error al actualizar la prioridad:", error);
  }
}

// Computados para las tareas pendientes y el total
const pendientes = computed(() =>
  tasks.value.filter((task) => !task.completed).length
);
const total = computed(() => tasks.value.length);
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #333;
}
</style>
