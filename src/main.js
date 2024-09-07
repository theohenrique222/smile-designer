import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel }, true );

createApp(App).mount('#app')
