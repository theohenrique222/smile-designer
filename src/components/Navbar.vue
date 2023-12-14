<template>

  <div class="bg-black text-gray-100 py-1 px-6 shadow-2xl md:flex justify-between items-center">

    <div class="flex items-center cursor-pointer">
        <span class="mr-3">
            <img src="../assets/logo3.png" alt="logo" height="15px" width="35px">
        </span>

        <h1 class="text-xl">Designer</h1>
        
    </div>

    <span @click="MenuOpen()" class="absolute md:hidden right-6 top-5 cursor-pointer text-4xl">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 bg-black md:static absolute md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[100%]']"> 
        <li class="md:mx-4 md:my-0 my-4 " v-for="link in Links" :key="link">
            <a :href="link.link" class="text-base hover:text-rose-500 ">{{ link.name }}</a>
        </li>
        <Button>
            Fale Conosco
        </Button>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Button from './Button.vue';
export default {
    components:{
        Button
    },
        setup(){
            let open = ref(false)
            let Links = [
                {name: "Início", link: "#"},
                {name: "Sobre", link: "#"},
                {name: "Trabalhos", link: "Contact"},
                {name: "Testemunhos", link: "#"},
            ]

            function MenuOpen(){
                open.value = !open.value
            }

            return{Links,open,MenuOpen}
        }
}
</script>

<style>

</style>