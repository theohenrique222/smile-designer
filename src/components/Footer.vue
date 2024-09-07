<template>
<!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
<!--Footer container-->
<footer
  class="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-primary-bordo">
  <div class="container pt-9">
    <div class="mb-9 flex justify-center items-center">

      <a v-for="item in items" :key="item.id" :href=item.href class="text-white text-xl">
        <i class="p-5 hover:text-gray-500" :class=item.name></i>
      </a>
    
    </div>
  </div>

  <div
    class="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-second-bordo dark:text-neutral-200">
    © 2024 Copyright:
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://tw-elements.com/"
      >Theodoro Henrique | Fron-end Developer</a
    >
  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {id:1, name: "bi bi-facebook", href: "/"},
        {id:1, name: "bi bi-google", href: "/"},
        {id:1, name: "bi bi-instagram", href: "/"},
        {id:1, name: "bi bi-linkedin", href: "/"},
      ]
    }
  }
}
</script>

<style>

</style>