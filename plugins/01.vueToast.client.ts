import ToastPlugin from "vue-toast-notification";

export default defineNuxtPlugin({
  name: "vue-toast",
  parallel: true,
  enforce: "post",
  async setup(nuxtApp) {
    nuxtApp.vueApp.use(ToastPlugin);
  },
});
