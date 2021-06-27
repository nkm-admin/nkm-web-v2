import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import ElementPlus from 'element-plus'

import './assets/styles/index.scss'

const app = createApp(App)
app.use(store, key).use(ElementPlus).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
