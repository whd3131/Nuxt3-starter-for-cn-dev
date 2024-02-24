// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  site: {
    url: 'https://temp.cand.top',
  },
  app: {
    // head
    head: {
      title: 'Element Plus + Nuxt 3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  nitro: {
    // enable it when deploy to vercel, local development please disable it
    preset: 'vercel-edge',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // css
  css: [
    '~/assets/scss/index.scss',
    '~/assets/css/main.css'
  ],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-gtag',
    '@nuxtjs/sitemap'
  ],

  //@ts-ignore
  gtag: {
    id: 'G-5RBQ79CGYQ'
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})
