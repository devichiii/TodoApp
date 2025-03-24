<template>
    <button @click="toggleTheme" class="theme-toggle">
      {{ isDark ? '☀️ Светлая' : '🌙 Тёмная' }}
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const isDark = ref(false);
  
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark-theme', isDark.value);
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  };
  
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    isDark.value = savedTheme === 'dark';
    document.documentElement.classList.toggle('dark-theme', isDark.value);
  });
  </script>
  
  <style scoped>
  .theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 8px 12px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    z-index: 100;
  }
  </style>