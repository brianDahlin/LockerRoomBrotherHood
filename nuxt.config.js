export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Locker Room Brotherhood',
    description: 'NFT collection of a 10.000 unique pieces. Warm-ups are over. Get ready for a puck drop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: "https://fonts.gstatic.com" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Aldrich&display=swap" },
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-3SZX535S3C",
        async: true,
      },
      {
        src: "/ga.js",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
