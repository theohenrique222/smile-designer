<template>
  <section
    id="home"
    class="w-full h-[55rem] lg:h-[690px] bg-[url('assets/bg-lg.png')] bg-no-repeat bg-cover text-gray-100"
  >
    <div
      class="lg:flex m-auto lg:pt-0 pt-52 max-w-7xl h-full items-center w-full space-y-3"
    >
      <div class="lg:hidden text-center">
        <h1 class="font-extrabold m-0 text-[2.5rem]">{{ name }}</h1>
        <p class="font-light uppercase">{{ secondName }}</p>
      </div>

      <div class="w-full space-y-3">
        <h3 class="uppercase font-bold lg:text-4xl text-xl text-center">
          {{ title }}
        </h3>
        <h3 class="uppercase font-semibold lg:text-2xl text-xl text-center">
          {{ license }}
        </h3>
        <div class="space-y-3 px-3">
          <h3 class="font-semibold text-xl">
            {{ title_description }}
          </h3>
          <p class="text-justify font-light sm:text-sm lg:text-xl">
            {{ description }}
          </p>
          <h3 class="font-semibold text-xl">
            {{ subtitle_description }}
          </h3>
          <div class="w-full max-w-7xl flex lg:justify-start justify-center m-auto">
            <!-- <Button href="/contact" class="text-xl mt-5"> Fale conosco </Button> -->
            <a href="#contact"
              class="inline-block text-white bg-orange-500 px-24 py-3 mt-5 rounded-md shadow-2xl shadow-black/50 hover:bg-orange-800 tracking-wider"
              type="submit"
            >
              Fale conosco
          </a>
          </div>
        </div>
      </div>
      <div class="lg:flex lg:flex-col hidden w-full text-end">
        <div class="bg-second-bordo rounded-tr-3xl ml-60 rounded-bl-3xl p-4">
          <h1 class="font-extrabold m-0 text-4xl">{{ name }}</h1>
          <p class="font-light uppercase px-20">{{ secondName }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      name: "Hudson Azevedo",
      secondName: "Smile Designer",
      title: "Técnico em protese dentaria",
      license: "CRO | RN-215",
      title_description: "Sorriso Perfeito, Conforto Garantido",
      description:
        "Somos especialistas em criar próteses dentárias que combinam alta tecnologia e um toque artesanal. Nosso compromisso é com a qualidade, conforto e estética, oferecendo soluções personalizadas que proporcionam aos nossos clientes sorrisos mais saudáveis e confiantes.",
      subtitle_description:
        "Agende uma consulta agora e transforme seu sorriso!",
    };
  },
};
</script>
<style>
</style>