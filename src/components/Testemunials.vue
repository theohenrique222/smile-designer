<template>
  <div id="testemunials" class="bg-orange-50">
    <section class="max-w-7xl w-full m-auto pt-5 pb-5 mb-32 text-center">
      <h2 class="mb-12 text-3xl font-bold">
        O que nossos clientes <u class="text-primary-bordo font-extrabold dark:text-rose-600">acham de nosso trabalho</u>?
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div v-for="card in cards"
        :key="card.id" class="mb-6 lg:mb-0 px-3 lg:px-0">
          <div
            
            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img :src="card.img" class="w-full rounded-t-lg" />
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-lg font-bold">{{ card.name }}</h5>
              <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                {{ card.profession }}
              </h6>
              <p>
                {{ card.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          img: "https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg",
          name: "Exemplo",
          profession: "Dentista",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti tempora saepe ex? Modi aliquam tempore corrupti minus ab itaque assumenda eveniet, corporis dolores asperiores, animi voluptatum officiis, at dicta.",
        },
        {
          id: 2,
          img: "https://mdbcdn.b-cdn.net/img/new/avatars/7.jpg",
          name: "Exemplo",
          profession: "Dentista",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti tempora saepe ex? Modi aliquam tempore corrupti minus ab itaque assumenda eveniet, corporis dolores asperiores, animi voluptatum officiis, at dicta.",
        },
        {
          id: 3,
          img: "https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg",
          name: "Exemplo",
          profession: "Dentista",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti tempora saepe ex? Modi aliquam tempore corrupti minus ab itaque assumenda eveniet, corporis dolores asperiores, animi voluptatum officiis, at dicta.",
        },
      ],
    };
  },
};
</script>

<style>
</style>