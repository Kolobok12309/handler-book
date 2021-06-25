import colors from 'vuetify/es5/util/colors'

import defaultMeta from './configs/defaultMeta'
import env from './configs/env'

export default {
  env,

  ssr: false,

  target: 'static',

  head: defaultMeta,

  css: [],

  plugins: [],

  components: false,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: process.env.HB_SERVER_API_URL,
    browserBaseURL: process.env.HB_CLIENT_API_URL,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
