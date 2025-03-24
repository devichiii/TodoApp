<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../model/useTodoStore';

const newTask = ref('');
const todoStore = useTodoStore();
const isSubmitting = ref(false);

const addTodo = async () => {
  if (isSubmitting.value || !newTask.value.trim()) return;
  
  isSubmitting.value = true;
  try {
    await todoStore.addTodo(newTask.value);
    newTask.value = '';
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="todo-header">
    <h1>Мой список задач</h1>
    <form @submit.prevent="addTodo" class="todo-form">
    <input
      v-model="newTask"
      placeholder="Введите новую задачу"
      class="todo-input"
    >
    <button 
      type="submit" 
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? 'Добавляем...' : 'Добавить' }}
    </button>
    </form>
  </div>
</template>


<style scoped>
.todo-form {
  display: flex;
  margin-bottom: 20px;
}
.todo-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 12px 0 0 12px;
  background: linear-gradient(90deg, #f5f5f5, #e0e0e0);
  font-size: 16px;
  outline: none;
  transition: all 0.3s;
}

.todo-input:focus {
  background: linear-gradient(90deg, #e3f2fd, #bbdefb);
}

.todo-item {
  transition: all 0.3s ease;
}
</style>