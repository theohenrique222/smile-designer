<!-- <template>
  <header
    class="bg-black/80 backdrop-blur-md w-full fixed text-gray-100 shadow-2xl flex justify-between items-center z-50"
  >
    <nav class="flex justify-between w-full max-w-7xl m-auto">
      <div class="flex space-x-3 items-center cursor-pointer">
        <img class="w-8" :src="logo" :alt="alt" />
        <h1 class="text-xl">Designer</h1>
      </div>

      <div class="md:hidden flex items-center">
        <a @click="toggleMenu" class="cursor-pointer text-4xl">
          <i :class="[isOpen ? 'bi bi-x' : 'bi bi-filter-left']"></i>
        </a>
      </div>

      <div class="">
        <ul
          class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-700 ease-in"
          :class="{ 'left-0': isOpen, 'left-full': !isOpen }"
        >
          <li
            class="md:mx-4 md:my-0 my-4"
            v-for="link in links"
            :key="link.name"
          >
            <a :href="link.link" class="text-base hover:text-rose-500">{{
              link.name
            }}</a>
          </li>
          <Button> Fale Conosco </Button>
        </ul>
      </div>
    </nav>
  </header>
</template>
  
  <script>
import { ref } from "vue";
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  setup() {
    const isOpen = ref(false);
    const links = [
      { name: "Início", link: "#" },
      { name: "Sobre", link: "#" },
      { name: "Trabalhos", link: "#" },
      { name: "Testemunhos", link: "#" },
    ];

    const logo = "./logo3.png";
    const alt = "Logo";

    function toggleMenu() {
      isOpen.value = !isOpen.value;
    }

    return { logo, alt, links, isOpen, toggleMenu };
  },
};
</script>
  
  <style scoped>

</style> -->

<template>
  <nav
    class="bg-black/70 backdrop-blur text-white fixed top-0 left-0 right-0 p-2 z-50 border-b-2 shadow-2xl shadow-black border-gray-500"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="flex space-x-3 items-center cursor-pointer">
        <img class="w-8" :src="logo" :alt="alt" />
        <h1 class="text-xl">Designer</h1>
      </div>

      <!-- Menu Items -->
      <div class="hidden md:flex cursor-pointer space-x-6">
        <a
          v-for="item in items_menu"
          :key="item.id"
          :href="item.route_to"
          class="hover:text-orange-color text-gray-100"
          >{{ item.name }}</a
        >
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden mt-4 space-y-2">
      <a
        v-for="item in items_menu"
        :key="item.id"
        :href="item.route_to"
        class="block px-4 py-2 hover:text-orange-color"
        >{{ item.name }}</a
      >
    </div>
  </nav>
</template>
  
  <script>
export default {
  data() {
    return {
      logo: "./logo3.png",
      alt: "Logo",
      items_menu: [
        { name: "Início", link: "#" },
        { name: "Sobre", link: "#" },
        { name: "Trabalhos", link: "#" },
        { name: "Testemunhos", link: "#" },
      ],
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
  