import { defineStore } from 'pinia'
import { todoApi } from '@shared/api/todoApi'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt?: string
}

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchTodos() {
      this.loading = true;
      try {
        this.todos = await todoApi.getAll();
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Unknown error';
      } finally {
        this.loading = false;
      }
    },

    async addTodo(text: string) {
      // Проверка на дубликаты
      const exists = this.todos.some(t => 
        t.text.trim().toLowerCase() === text.trim().toLowerCase()
      );
      
      if (exists) {
        throw new Error('Такая задача уже существует');
      }
    
      const newTodo = await todoApi.create(text);
      this.todos.unshift(newTodo); // Добавляем в начало
    },

    async toggleTodo(id: number) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        const updated = await todoApi.update(id, { 
          completed: !todo.completed 
        });
        Object.assign(todo, updated);
      }
    },

    async updateTodo(payload: { id: number; changes: Partial<Todo> }) {
      try {
        const fullChanges = {
          text: this.todos.find(t => t.id === payload.id)?.text,
          ...payload.changes
        };
        
        const updated = await todoApi.update(payload.id, fullChanges);
        const index = this.todos.findIndex(t => t.id === payload.id);
        if (index !== -1) {
          this.todos.splice(index, 1, updated);
        }
      } catch (error) {
        console.error('Update error:', error);
      }
    },

    async deleteTodo(id: number) {
      if (!id || isNaN(id)) {
        console.error('Попытка удаления с невалидным ID:', id);
        return;
      }
      
      try {
        await todoApi.delete(id);
        await this.fetchTodos();
      } catch (err) {
        console.error('Delete error:', err.message);
      }
    },
    
    reorderTodos(fromIndex: number, toIndex: number) {
      const item = this.todos.splice(fromIndex, 1)[0];
      this.todos.splice(toIndex, 0, item);
    },
    
    editTodo(payload: { id: number; text: string }) {
      const todo = this.todos.find(t => t.id === payload.id);
      if (todo) {
        todo.text = payload.text;
      }
    }
  }
})