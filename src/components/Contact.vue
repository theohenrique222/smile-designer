<template>
  <div id="contact">
    <h2 class="mb-12 text-3xl text-center pt-10 font-bold">
        Fale <u class="text-primary-bordo font-extrabold dark:text-rose-600">Conosco</u>
      </h2>
    <section class="mb-32">
      <div class="relative h-[300px] bg-[50%] bg-no-repeat bg-bg-form shadow-2xl shadow-black/50"></div>
      <div class="px-10 md:px-12">
        <div
        class="block rounded-lg px-6 py-12 shadow-2xl shadow-black/50 bg-second-bordo/50  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]"
        >
        <div class="flex flex-wrap">
          <div
          class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
          >
          <form
                action="https://formsubmit.co/theodoro222@hotmail.com"
                method="POST"
                enctype="text/plain"
              >
                <div
                  v-for="form in form_inputs"
                  :key="form.id"
                  class="relative mb-3 space-y-1"
                >
                  <label
                    :for="form.title"
                    class="relative left-0 top-0 ease-out text-white"
                    >{{ form.title }}
                  </label>
                  <input
                    :id="form.id_input"
                    :name="form.name"
                    :type="form.type"
                    required
                    class="block w-full rounded border-2 border-black/10 bg-transparent text-white p-2 outline-none"
                    :placeholder="form.placeholder"
                  />
                </div>

                <div class="relative mb-3 space-y-1">
                  <label
                    for="mensagem"
                    class="relative left-0 top-0 ease-out text-white"
                    >Em que posso te ajudar?
                  </label>
                  <textarea
                    name="mensagem: "
                    id="textarea"
                    class="h-32 block w-full rounded resize-none border-2 border-black/10 bg-transparent text-white p-3"
                  ></textarea>
                </div>

                <button
                  class="inline-block w-full text-white bg-orange-500 px-10 p-3 rounded-md hover:bg-orange-800 tracking-wider"
                  type="submit"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div class="flex flex-wrap">
                <div
                  v-for="card in socials_cards"
                  :key="card.id"
                  class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                >
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <a href=""
                        ><div
                          class="inline-block rounded-md bg-primary-100 p-3 text-primary-bordo text-2xl"
                        >
                          <i :class="card.ico_name"></i></div
                      ></a>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold dark:text-white">
                        {{ card.ico_title }}
                      </p>
                      <p class="text-neutral-500 dark:text-neutral-200">
                        {{ card.ico_content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
      title: "Se você tem projeto em sua mente.",
      content:
        "Estou sempre aberto a novas oportunidades e adoraria ouvir sobre o seu projeto ou responder a qualquer dúvida que você possa ter. Seja para discutir uma colaboração, um desafio específico ou simplesmente para trocar ideias, sinta-se à vontade para entrar em contato. Preencha o formulário abaixo ou envie-me um e-mail diretamente. Vamos explorar como podemos trabalhar juntos para criar algo incrível!",
      subTitle: "Seu próximo projeto começa aqui.",
      form_inputs: [
        {
          id: 1,
          title: "Nome completo: ",
          type: "text",
          id_input: "name",
          name: "Nome: ",
        },
        {
          id: 1,
          title: "Seu endereço de e-mail: ",
          type: "text",
          id_input: "address",
          name: "E-mail: ",
        },
        {
          id: 1,
          title: "Telefone para contato: ",
          type: "number",
          id_input: "phone",
          name: "Contato: ",
        },
      ],
      socials_cards: [
        {
          id: 1,
          ico_title: "Whatsapp",
          ico_content: "+55 (84) 99999-9999",
          ico_name: "bi bi-whatsapp",
        },
        {
          id: 2,
          ico_title: "E-mail",
          ico_content: "email@example.com",
          ico_name: "bi bi-google",
        },
        {
          id: 2,
          ico_title: "Instagram",
          ico_content: "@smiledesigner",
          ico_name: "bi bi-instagram",
        },
        {
          id: 2,
          ico_title: "Linkedin",
          ico_content: "smiledesigner@example.com",
          ico_name: "bi bi-linkedin",
        },
      ],
    };
  },
};
</script>

<style>
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>