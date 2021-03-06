import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
createApp(App).use(ElementPlus).use(router).mount('#app')
