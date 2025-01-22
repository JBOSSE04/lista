<template>
  <ul class="task-list">
    <Tarea
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggleStatus="$emit('toggleStatus', task)"
      @deleteTask="$emit('deleteTask', task)"
      @updatePriority="$emit('updatePriority', task, $event)"
    />
  </ul>
</template>

<script setup>
import { defineProps } from "vue";
import Tarea from "./tarea.vue";

const props = defineProps({
  tasks: Array, // Las tareas se pasan como un prop
});
</script>

<style scoped>
.task-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
</style>
