// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  buildModules: [
    '@nuxt/typescript-build',
  ],
});
