<template>
  <div id="faq" class="pt-5 pb-5 bg-rose-50">
    <h1 class="mb-12 text-3xl font-bold text-center">Algumas <u class="text-primary-bordo font-extrabold dark:text-rose-600">dúvidas frequentes</u></h1>
    <div class="max-w-7xl m-auto bg-gray-50 shadow-2xl shadow-black/50 p-10">
      <ol
        v-for="doubt in doubts"
        :key="doubt.id"
        class="border-s border-neutral-300"
      >
        <li>
          <div class="flex-start flex items-center pt-3">
            <div
              class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-black"
            ></div>
          </div>
          <div class="ms-4">
            <h4 class="mb-1.5 text-xl font-bold">{{ doubt.title }}</h4>
            <p class="text-xl font-light text-black">
              {{ doubt.content }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doubts: [
        {
          id: 1,
          title: "Dúvidas frequentes 1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis ollis. Duis sagittis ligula in sodales vehicula.",
        },
        {
          id: 2,
          title: "Dúvidas frequentes 2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis ollis. Duis sagittis ligula in sodales vehicula.",
        },
        {
          id: 3,
          title: "Dúvidas frequentes 3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis ollis. Duis sagittis ligula in sodales vehicula.",
        },
      ],
    };
  },
};
</script>

<style>
</style>