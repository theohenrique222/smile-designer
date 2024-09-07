/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "index.html",
    "src/**/*.{vue,js,ts,jsx,tsx}",
    "src/**/*.{html,js}",
    "node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    backgroundImage: {
        'bg-lg': "url('src/assets/bg-lg.png')",
        'bg-sm': "url('src/assets/bg-sm.png')",
        'bg-form': "url('src/assets/bg-form.png')",
      },
    extend: {
      colors: {
        'primary-bordo': '#54192D',
        'second-bordo': '#441120'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],

}

