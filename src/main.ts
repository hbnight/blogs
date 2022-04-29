import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import ElementPlus from 'element-plus'
import '@/assets/reset.scss'
import 'element-plus/theme-chalk/index.css'

createApp(App).use(Router).use(ElementPlus).mount('#app')
