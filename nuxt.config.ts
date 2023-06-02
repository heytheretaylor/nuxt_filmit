// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
	modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'

  ],
  googleFonts:{
    families:{
      Poppins: true
    }
  }
})
