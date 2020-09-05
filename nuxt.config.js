
export default {
  mode: 'universal',
  env: {
    BASE_URL: 'https://pilltech.com.kh',
    apiUrl: 'http://localhost:1337',
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  // router: {
  //   base: '/app/'
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'PillTech Co., Ltd',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Battambang:wght@400;700&family=Quicksand:wght@400;700&display=swap' },
      // { rel: 'stylesheet',  href: '~assets/styles/fontawesome/css/all.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // CSS file in the project
    // SCSS file in the project
    '@/assets/styles/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/helper.js'},
    { src: "~plugins/slick.js", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      strategy: 'prefix_except_default',
      defaultLocale: 'en',
      // vueI18nLoader: true,
      locales: [
        {
          code: 'en',
          file: 'en-US.js'
        },
        {
          code: 'kh',
          file: 'kh-KM.js'
        }
      ],
      lazy: true,
      langDir: 'lang/'
    }],
  ],
  axios: {
    baseURL: 'http://localhost:1337'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {}
  },
}
