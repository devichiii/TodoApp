<script setup lang="ts">
import { useTodoStore } from '@/features/todo/model/useTodoStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import type { Todo } from '../types';
import TodoItem from './TodoItem.vue';

// Инициализация хранилища
const todoStore = useTodoStore()
const { todos, loading, error } = storeToRefs(todoStore)

const props = defineProps<{
  todos: Todo[]
}>();

const emit = defineEmits<{
  (e: 'update', payload: { id: string; changes: Partial<Todo> }): void;
  (e: 'delete', id: string): void;
  (e: 'reorder', fromIndex: number, toIndex: number): void;
}>();

const handleUpdate = (payload: { id: string; changes: Partial<Todo> }) => {
  emit('update', payload);
};

const handleDelete = (id: string) => {
  emit('delete', id);
};

const draggedIndex = ref<number | null>(null);

const handleDragStart = (index: number) => {
  draggedIndex.value = index;
};

const handleDrop = (index: number) => {
  if (draggedIndex.value !== null && draggedIndex.value !== index) {
    emit('reorder', draggedIndex.value, index);
  }
  draggedIndex.value = null;
};
</script>

<template>
  <div class="todo-container">
    <div v-if="todos.length === 0" class="empty-state">
      Пока нет задач. Добавьте первую!
    </div>
    <ul class="todo-list">
      <li
        v-for="(todo, index) in todos"
        :key="todo._id"
        draggable="true"
        @dragstart="handleDragStart(index)"
        @dragover.prevent
        @drop.prevent="handleDrop(index)"
        class="todo-item"
      >
        <TodoItem
          :todo="todo"
          @update="handleUpdate"
          @delete="handleDelete"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.completed {
  position: relative;
  color: #90a4ae;
}

.completed::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -32px;
  width: calc(100% + 32px);
  height: 1px;
  background: #42b983;
  transform: scaleX(0);
  transform-origin: left;
  animation: strike 0.3s ease-out forwards;
}

@keyframes strike {
  to { transform: scaleX(1); }
}

.todo-container {
  margin-top: 2rem;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  background-color: var(--bg-color);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: 20px;
}

.empty-state img {
  width: 120px;
  opacity: 0.7;
  margin-bottom: 16px;
}

.empty-state p {
  color: #90a4ae;
  font-size: 18px;
}

.todo-item.dragging {
  opacity: 0.5;
  background: var(--border);
}
</style>