import { createApp } from 'vue'
import { setupStore } from './stores'
import App from './App.vue'
import router from './router'

import '@/styles/loadStyle.js'

const app = createApp(App)
app.use(setupStore)
app.use(router)
app.mount('#app')
