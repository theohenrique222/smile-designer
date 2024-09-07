<template>
  <nav
    class="bg-black/70 backdrop-blur text-white fixed top-0 left-0 right-0 p-2 z-50 border-b-2 shadow-2xl shadow-black border-gray-500"
  >
    <div class="container mx-auto flex justify-between items-center">

      <div class="flex space-x-3 items-center cursor-pointer">
        <img class="w-8" :src="logo" :alt="alt" />
        <h1 class="text-xl">Designer</h1>
      </div>

      <div class="hidden md:flex cursor-pointer space-x-6">
        <a v-for="item in items_menu"
          :key="item.id"
          :href="item.link"
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
        { name: "Início", link: "#home" },
        { name: "Sobre", link: "#about" },
        { name: "Trabalhos", link: "#portfolio" },
        { name: "Testemunhos", link: "#testemunials" },
        { name: "Duvidas", link: "#faq" },
        { name: "Contato", link: "#contact" },
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
  