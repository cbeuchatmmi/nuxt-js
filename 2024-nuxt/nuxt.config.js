// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/prismic',
    '@pinia/nuxt',
    '@nuxtjs/storybook',
  ],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  runtimeConfig: {
    public: {
      apiUrl: ''
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: [
    '@/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";
          `
        }
      }
    }
  },
})
