<template>
  <div id="portfolio" class="pt-5 pb-5 bg-rose-50">
    <div class="lg:max-w-6xl max-w-sm m-auto">
      <h2 class="mb-12 text-black text-center text-3xl font-bold">Alguns de nossos <u class="text-primary-bordo font-extrabold dark:text-rose-600">Trabalhos concluidos</u>!</h2>
      <div class="grid gap-6 lg:grid-cols-3 grid-cols-1 lg:mx-0 mx-3">

        <div v-for="example in examples" :key="example.id" class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-2xl shadow-black">
          <img :src=example.src
            class="w-full transition duration-300 h-full"/>
          <a href="/">
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div class="flex h-full items-end justify-start">
                <h5 class="p-2 text-lg font-bold text-white bg-neutral-950/50 backdrop-blur-md w-full text-center">{{ example.text }}</h5>
              </div>
            </div>
          </a>
        </div>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examples: [
        {id:1, src: "portfolio1.jpg", text: "Exemplo 1"},
        {id:1, src: "portfolio2.jpg", text: "Exemplo 2"},
        {id:1, src: "portfolio3.jpg", text: "Exemplo 3"},
        {id:1, src: "portfolio4.jpg", text: "Exemplo 4"},
        {id:1, src: "portfolio5.jpg", text: "Exemplo 5"},
        {id:1, src: "portfolio6.jpg", text: "Exemplo 6"},
      ]
    }
  }
}
</script>

<style>
/* .zoom:hover img{
    transform: scale(1.1);
} */
</style>