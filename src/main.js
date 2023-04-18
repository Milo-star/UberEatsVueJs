import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './page/HomePage.vue'

const routes = [
    { path: '/', component: HomePage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const VueApp = createApp(App)

VueApp.use(router)

.mount('#app')
