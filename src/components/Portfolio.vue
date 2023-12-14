<template>
  <div class="pt-5 pb-5 bg-rose-50">
    <div class="lg:max-w-6xl max-w-sm m-auto">
      <h2 class="mb-12 text-black text-center text-3xl font-bold">Alguns de nossos <u class="text-primary-bordo dark:text-rose-600">Trabalhos concluidos</u>!</h2>
      <div class="grid gap-6 lg:grid-cols-3 grid-cols-2">
        <div class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="../assets/portfolio1.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div class="flex h-full items-end justify-start">
                <h5 class="m-6 text-lg font-bold text-white">Exemplo 1</h5>
              </div>
            </div>
          </a>
        </div>

        <div class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="../assets/portfolio4.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div class="flex h-full items-end justify-start">
                <h5 class="m-6 text-lg font-bold text-white">Exemplo 2</h5>
              </div>
            </div>
            <div>
              <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
              </div>
            </div>
          </a>
        </div>

        <div class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="../assets/portfolio3.jpg" class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed ">
              <div class="flex h-full items-end justify-start">
                <h5 class="m-6 text-lg font-bold text-white">Exemplo 3</h5>
              </div>
            </div>
          </a>
        </div>

        <div class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="../assets/portfolio2.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="../assets/portfolio2.jpg">
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div class="flex h-full items-end justify-start">
                <h5 class="m-6 text-lg font-bold text-white">Exemplo 4</h5>
              </div>
            </div>
          </a>
        </div>

        <div class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="../assets/portfolio5.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div class="flex h-full items-end justify-start">
                <h5 class="m-6 text-lg font-bold text-white">Exemplo 5</h5>
              </div>
            </div>
          </a>
        </div>

        <div  class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
          data-te-ripple-init data-te-ripple-color="dark">
          <img src="../assets/portfolio6.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div class="flex h-full items-end justify-start">
                <h5 class="m-6 text-lg font-bold text-white">Exemplo 6</h5>
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

}
</script>

<style>
.zoom:hover img{
    transform: scale(1.1);
}
</style>