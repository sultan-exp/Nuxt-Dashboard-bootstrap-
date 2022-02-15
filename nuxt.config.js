export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Todo",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3', crossorigin: 'anonymous' },
      { rel: 'script', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p', crossorigin: 'anonymous' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vuedraggable.js', ssr: false },
    { src: '~plugins/v-calendar.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "vue-sweetalert2/nuxt"],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/login", method: "post" },
          logout: false,
          user: { url: "/user", method: "get" },
        },
        user: {
          property: false,
        },
        token: {
          maxAge: 86400 * 30, // One month
        },
      },
    },
    redirect: {
      login: "/",
      logout: "/",
      user: "/",
      callback: "/",
    },
  },

  /*
   ** Environment variables
   */
  env: {
    stripePublishableKey:
      process.env.STRIPE_PUBLISHABLE_KEY ||
      "pk_test_rHexF1dsPqOyjRf3EYA1YmXh003fzbVUZM",
  },

  /*
   ** Nuxt.js axios module
   */
  axios: {
    baseURL: process.env.API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  },

    /*
  ** Router settings
  */
  router: {
    linkActiveClass: 'mm-active',
    middleware: ['auth', 'check-access']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
