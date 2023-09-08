// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "nuxt-svgo"],
  buildModules: ["@nuxt/typescript-build"],
  // ssr: false,
  // spaLoadingTemplate: true,
  css: [
    "~/assets/css/scroll.css",
    "~/assets/css/vue.css",
  ],
});
