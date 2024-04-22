// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.min.css", 
  "bootstrap-icons/font/bootstrap-icons.css",],
  app: {
    head: {
      script: [{
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
      }]
    }
  },
  modules: ["@nuxtjs/supabase"],
  supabase: { redirect: true },
})
