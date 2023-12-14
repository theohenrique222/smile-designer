<template>
  <main class="lg:bg-bg-lg bg-bg-sm w-full h-[600px] bg-no-repeat bg-center bg-cover">
    <div class="lg:flex justify-between mx-auto max-w-5xl items-center pt-20 ">
     
      <div class="lg:hidden text-center">
          <h1 class="text-white font-extrabold m-0 text-[2.5rem]">Hudson Azevedo</h1>
          <p class="text-white font-light uppercase ">Smile Designer</p>
      </div>
      
      <div class="lg:w-full w-10/12 m-auto">
          <h1 class="text-white uppercase font-bold text-4xl text-center lg:pb-0 pb-2">Técnico em protese dentaria</h1>
          <p class="text-white text-justify font-light sm:text-sm lg:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, tempora. Adipisci ab quam id assumenda perferendis minus beatae! Doloribus cum, neque tempore hic ut enim debitis itaque quasi similique totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis pariatur laborum reiciendis minima fuga? Doloribus omnis in, quam eaque labore voluptatem, quod mollitia, iste laboriosam nobis ut iure? Nesciunt, itaque! Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div class="lg:flex lg:flex-col hidden text-end w-full pt-5">
          <h1 class="text-white font-extrabold m-0 text-4xl">Hudson Azevedo</h1>
          <p class="text-white font-light uppercase px-20">Smile Designer</p>
        </div>
      </div>
      <div class="flex pt-5">
        <Button class="text-white text-xl mx-auto">
          Fale conosco
        </Button>
      </div>
  </main>

</template>

<script>
import Button from './Button.vue';

export default {
  components: {
    Button
  }
}
</script>
