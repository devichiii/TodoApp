<script setup lang="ts">
import { ref } from 'vue';
import type { Todo } from '../types';

const props = defineProps<{
  todo: {
    id: number;
    text: string;
    completed: boolean;
  }
}>();

const emit = defineEmits<{
  (e: 'update', payload: { id: number; changes: Partial<Todo> }): void;
  (e: 'delete', id: number): void;
}>();

const isEditing = ref(false);
const editText = ref(props.todo.text);

const toggleComplete = () => {
  if (!props.todo?.id) return;
  
  emit('update', {
    id: props.todo.id,
    changes: { 
      completed: !props.todo.completed,
      text: props.todo.text 
    }
  });
};

const startEdit = () => {
  isEditing.value = true;
  editText.value = props.todo.text;
};

const saveEdit = () => {
  if (editText.value.trim() && props.todo.id) {
    emit('update', {
      id: props.todo.id,
      changes: { text: editText.value }
    });
    isEditing.value = false;
  }
};

const deleteTodo = () => {
  if (!props.todo.id) {
    console.error('ID задачи отсутствует');
    return;
  }
  if (confirm('Вы уверены, что хотите удалить задачу?')) {
    emit('delete', props.todo.id);
  }
};

const handleBlur = () => {
  if (isEditing.value) {
    saveEdit();
  }
};

</script>

<template>
  <div class="todo-item">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="toggleComplete"
      class="todo-checkbox"
    >
    
    <span v-if="!isEditing" :class="{ completed: todo.completed }">
      {{ todo.text }}
    </span>
    
    <input
      v-else
      v-model="editText"
      @blur="handleBlur"
      @keyup.enter="saveEdit"
      @keyup.escape="isEditing = false"
      class="edit-input"
      autofocus
    >

    <div class="todo-actions">
      <button @click="startEdit" class="edit-btn">✏️</button>
      <button 
        @click="deleteTodo" 
        class="delete-btn"
        :disabled="isDeleting"
      >
        <span v-if="isDeleting">⌛</span>
        <span v-else>🗑️</span>
  </button>
    </div>
  </div>
</template>


<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.todo-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.todo-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #42b983;
  border-radius: 6px;
  margin-right: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
}

.todo-checkbox:checked {
  background-color: #42b983;
  border-color: #42b983;
}

.todo-checkbox:checked::after {
  content: "✓";
  position: absolute;
  color: white;
  font-size: 14px;
  left: 3px;
  top: -1px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.todo-actions {
  margin-left: auto;
  display: flex;
  gap: 8px;
}

.edit-btn, .delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.edit-btn:hover {
  color: #42b983;
}

.delete-btn:hover {
  color: #ff4757;
}

.edit-input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.todo-actions {
  margin-left: auto;
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s;
}

.todo-item:hover .todo-actions {
  opacity: 1;
}

.edit-btn, .delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.edit-btn {
  color: #555;
  background-color: #f5f5f5;
}

.edit-btn:hover {
  background-color: #e0f7fa;
  color: #00bcd4;
}

.delete-btn {
  color: #555;
  background-color: #f5f5f5;
}

.delete-btn:hover {
  background-color: #ffebee;
  color: #f44336;
}

.dark-mode .todo-item {
  background: #2d3748;
  color: #e2e8f0;
}

.dark-mode .todo-input {
  background: #4a5568;
  color: white;
}

.dark-mode .completed {
  color: #718096;
}

</style>