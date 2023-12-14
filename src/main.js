import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true ); // set second parameter to true if you want to use a debugger
createApp(App).mount('#app')
