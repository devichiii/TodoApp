import axios from 'axios';
import type { Todo } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const todoApi = {
  async getAll(): Promise<Todo[]> {
    const response = await api.get('/todos');
    return response.data;
  },

  async create(text: string): Promise<Todo> {
    const response = await api.post('/todos', { 
      text,
      completed: false 
    });
    return response.data;
  },

  async update(id: number, changes: Partial<Todo>) {
    console.log('Sending PATCH to:', `/todos/${id}`);
    try {
      const response = await api.patch(`/todos/${id}`, {
        text: changes.text || '',
        completed: changes.completed
      });
      return response.data;
    } catch (error) {
      console.error('Update error details:', error.response?.data);
      throw error;
    }
  },


  async delete(id: number, changes: Partial<Todo>) {
    console.log('Sending DELETE to:', `/todos/${id}`);
    try {
      await api.delete(`/todos/${id}`);
    } catch (error) {
      console.error('Delete error details:', error.response?.data);
      throw error;
    }
  },
};