import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Landing from './pages/Landing.vue'
import Page1 from './pages/Page1.vue'

import {
    createMemoryHistory,
    createWebHashHistory,
    createWebHistory,
    createRouter 

} from 'vue-router'

const routerConfig = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Landing },
        { path: '/page1', component: Page1 },
    ],
})

createApp(App)
    .use(routerConfig)
    .mount('#app')
