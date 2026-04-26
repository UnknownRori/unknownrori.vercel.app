import { SplashPage } from '@/pages';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Splash",
      component: SplashPage,
      meta: { scene: 0, pixelOverlayPadding: 'opacity-100 sm:py-52 sm:px-4 md:py-72 md:px-12 lg:py-52 lg:px-82' },
    },
  ]
});

//router.beforeEach(async function(to, _from, next) {
//  useBackground().setScene(parallaxSceneData[to.meta.scene as number]);
//  usePixelOverlayBoder().setPadding(to.meta.pixelOverlayPadding as string);
//  return next();
//})

export default router;
