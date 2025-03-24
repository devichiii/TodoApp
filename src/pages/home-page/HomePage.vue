<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTodoStore } from '@features/todo/model/useTodoStore'
import TodoForm from '@features/todo/ui/TodoForm.vue'
import TodoList from '@features/todo/ui/TodoList.vue'
import ThemeToggle from '@shared/ui/ThemeToggle.vue'

const todoStore = useTodoStore();
const isLoading = ref(true);

onMounted(async () => {
  try {
    await todoStore.fetchTodos();
  } catch (error) {
    console.error('Ошибка загрузки задач:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div>
    <ThemeToggle />
    <TodoForm />
      <TodoList
      :todos="todoStore.todos"
      @update="todoStore.updateTodo"
      @delete="todoStore.deleteTodo"
      @reorder="todoStore.reorderTodos"
      />
  </div>
</template>

<style>

h1 {
  text-align: center;
  color: var(--text-color);
  font-size: 2.5rem;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;
}

h1::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #42b983, #64b5f6);
  border-radius: 2px;
}

</style>