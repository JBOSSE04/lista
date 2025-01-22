<template>
  <li :class="[ 'task-item', { completed: task.completed } ]">
    <div class="task-header">
      <button class="status-btn" @click="$emit('toggleStatus', task)">
        {{ task.completed ? "✅" : "⭕" }}
      </button>
      <span class="task-text">{{ task.text }}</span>
      <button class="delete-btn" @click="$emit('deleteTask', task)">❌</button>
    </div>
    <div class="task-footer">
      <div class="priority-buttons">
        <button
          :class="{ active: task.priority === 'low' }"
          @click="$emit('updatePriority', task, 'low')"
        >
          🟢 Low
        </button>
        <button
          :class="{ active: task.priority === 'normal' }"
          @click="$emit('updatePriority', task, 'normal')"
        >
          🟡 Normal
        </button>
        <button
          :class="{ active: task.priority === 'high' }"
          @click="$emit('updatePriority', task, 'high')"
        >
          🔴 High
        </button>
      </div>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  task: Object, // Cada tarea se pasa como un prop
});
</script>

<style scoped>
.task-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #2e2e2e;
  border-radius: 4px;
  color: #ffffff;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.priority-buttons button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.priority-buttons button.active {
  font-weight: bold;
  background-color: #ffffff;
  color: #2e2e2e;
}
</style>
