<template>
  <header>
    <h1>TO DO LIST</h1>
    <form @submit.prevent="addNewTask" class="task-input">
      <input
        v-model="taskText"
        type="text"
        placeholder="¿Qué quieres recordar?"
      />
    </form>
    <p>
      📊 {{ pendientes }} Tareas pendientes de un total de {{ total }} |
      <span class="clear" @click="$emit('clearTasks')">
        ❌ Borrar tareas completadas
      </span>
    </p>
  </header>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  pendientes: Number,
  total: Number,
});

const emit = defineEmits(["addTask", "clearTasks"]);

const taskText = ref("");

const addNewTask = () => {
  if (taskText.value.trim()) {
    const newTask = {
      text: taskText.value.trim(),
      priority: "normal",
      completed: false,
      createdAt: new Date(),
    };
    emit("addTask", newTask);
    taskText.value = "";
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #d4d4d4;
}

.task-input {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

input {
  width: 70%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

p {
  color: #ddd;
}

.clear {
  cursor: pointer;
  color: #ff4500;
  text-decoration: underline;
}
</style>
