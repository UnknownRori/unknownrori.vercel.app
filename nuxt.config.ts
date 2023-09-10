// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@kevinmarrec/nuxt-pwa",
    "@nuxtjs/supabase",
  ],
  buildModules: ["@nuxt/typescript-build"],
  // ssr: false,
  // spaLoadingTemplate: true,
  css: ["~/assets/css/scroll.css", "~/assets/css/vue.css"],
  pwa: {
    manifest: {
      name: "UnknownRori's online portfolio",
      short_name: "UnknownRori",
      description: "UnknownRori's personal site",
      background_color: "#000000",
      lang: "en",
    },
    meta: {
      name: "UnknownRori's personal site",
      author: "UnknownRori",
      ogSiteName: "UnknownRori's personal site",
      ogDescription: "UnknownRori's personal site",
      ogHost: "https://unknownrori.vercel.app",
      ogImage: {
        path: "/cover.png",
        width: 1366,
        height: 653,
        type: "image/png",
      },
      twitterCard: "summary",
      twitterCreator: "UnknownRori",
    },
  },
  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [],
    }
  },
});
