import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/app/layouts/MainLayout.vue'
import router from '@/app/router'
import '@/shared/assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

app.config.errorHandler = (err) => {
    console.error('Глобальная ошибка:', err);
};