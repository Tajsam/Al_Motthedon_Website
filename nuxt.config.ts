
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", '@fortawesome/fontawesome-svg-core/styles.css', '@/assets/css/style.css'],
  modules: ['@bootstrap-vue-next/nuxt'],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
          tagPosition: 'bodyClose'
        },
      ],
    },
  },
})
