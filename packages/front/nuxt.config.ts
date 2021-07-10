import path from 'path';

import colors from 'vuetify/es5/util/colors';

import defaultMeta from './configs/defaultMeta';
import env from './configs/env';

export default {
  env,

  ssr: false,

  target: 'static',

  head: defaultMeta,

  css: [{ src: '@fortawesome/fontawesome-free/css/all.css' }],

  plugins: [
    { src: '@/plugins/nuxt-client-init.ts', ssr: false },
    { src: '@/plugins/axios.ts' },
    { src: '@/plugins/composition-api.ts' },
    { src: '@/plugins/toast.ts' },
    { src: '@/components/global/index.ts' },
  ],

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
    treeShake: true,
    defaultAssets: {
      icons: 'fa',
    },
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
  build: {
    extractCss: true,
    loaders: {
      stylus: {
        stylusOptions: {
          import: ['global'],
          preferPathResolver: 'webpack',
          include: [path.resolve(__dirname, 'style')],
        },
      },
      imgUrl: { limit: 1000000 },
    },

    extends(config) {
      config.resolve.extensions = ['.vue', '.js', '.json', '.scss', '.styl'];
    },
  },
};
