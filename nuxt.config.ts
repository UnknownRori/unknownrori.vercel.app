// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    ["@nuxtjs/eslint-module", { lintOnStart: false }],
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@kevinmarrec/nuxt-pwa",
    "@nuxtjs/supabase",
    "@nuxt/image",
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
      ogSiteName: "UnknownRori",
      ogDescription: "UnknownRori's personal site",
      ogHost: "https://unknownrori.vercel.app",
      ogTitle: "UnknownRori's personal site",
      ogUrl: "https://unknownrori.vercel.app",
      ogImage: {
        path: "/cover.png",
        width: 1366,
        height: 653,
        type: "image/png",
      },
      twitterCard: "summary_large_image",
      twitterSite: "@UnknownRori",
      twitterCreator: "@UnknownRori",
    },
  },
  supabase: {
    redirect: false,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: [],
    },
  },
  image: {
    provider: "vercel",
    format: ["webp"],
    domains: [
      "https://user-images.githubusercontent.com",
      "https://images.githubusercontent.com",
      "https://opengraph.githubassets.com",
      "https://github.com",
      "https://unknownrori.vercel.app",
    ],
  },
});
