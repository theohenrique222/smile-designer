<template>
  <div id="about" class="pt-5 pb-5 bg-second-bordo">
    <div class="lg:max-w-6xl max-w-sm m-auto lg:px-0 px-2">
      <div class="block rounded-lg bg-rose-50 shadow-2xl shadow-black/50">
        <div class="flex flex-col lg:flex-row items-center">
          <!-- Imagem -->
          <div class="w-full lg:w-6/12 xl:w-4/12 mb-6 lg:mb-0">
             <img :src=image alt="Trendy Pants and Shoes"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"/>
          </div>
          <!-- Texto -->
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="mb-4 lg:text-3xl text-2xl font-extrabold">Conheça um pouco sobre quem somos!</h2>
              <p class="mb-6 flex items-center font-extrabold uppercase text-danger lg:text-xl text-base">
                <i class="bi bi-body-text px-2"></i>
                Hudson Azevedo | Smile Designer
              </p>
              <p class="mb-6 text-justify text-gray-900 dark:text-neutral-700 text-lg">
                Técnico em Prótese dentária com especialização em áreas diversas, com amplo conhecimento e visão técnica detalhista que tange à função e à estética, a fim de garantir a melhor prestação de serviço para clínicas e consultórios odontológicos, com a finalidade de reestabelecer a capacidade mastigatória e estética do paciente por meio de próteses dentárias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "/protese.jpg",
    }
  }
}
</script>

<style>

</style>