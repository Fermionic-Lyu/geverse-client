/* eslint-disable @typescript-eslint/ban-ts-comment */
import './assets/main.css'
import 'animate.css'
import './assets/tailwinds.css'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { detectZoom } from '@/utils/detectZoom.js'
const m = detectZoom()
//@ts-ignore
document.body.style.zoom = 100 / Number(m)
// 创建Pinia实例
const Pinia = createPinia()
import App from './App.vue'
createApp(App).use(router).use(Pinia).mount('#app')
