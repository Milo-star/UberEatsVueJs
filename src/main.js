import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './page/HomePage.vue'
import Restaurant from './page/Restaurant.vue'

const routes = [
    { path: '/', component: HomePage },
    { name: 'Restaurant', path: '/restaurant/:name', component: Restaurant}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const VueApp = createApp(App)

VueApp.use(router)

.mount('#app')
