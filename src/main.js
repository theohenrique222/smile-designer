import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Carousel, Collapse, initTE, } from "tw-elements";

initTE({ Carousel, Collapse, initTE });

createApp(App).mount('#app')
