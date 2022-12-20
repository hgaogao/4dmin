import { createApp } from 'vue'
import { setupStore } from './stores'
import App from './App.vue'
import router from './router'

import 'uno.css'
import './assets/style/main.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
app.use(setupStore)
app.use(router)
app.mount('#app')
