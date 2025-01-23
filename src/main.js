import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TextStyler from './pages/TextConfigurator.vue'

import {
	createMemoryHistory,
	createWebHashHistory,
	createWebHistory,
	createRouter 
} from 'vue-router'

const routerConfig = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TextStyler },
    ],
})

createApp(App)
	.use(routerConfig)
	.mount('#app')
