import { parallaxSceneData } from '@/data/Parallax';
import { BlogPage, ProfilePage, ProjectsPage, ResumePage, SocialPage, SplashPage } from '@/pages';
import useBackground from '@/stores/useBackground';
import usePixelOverlayBoder from '@/stores/usePixelOverlayBorder';
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
    {
      path: "/profile",
      name: "Profile",
      component: ProfilePage,
      meta: { scene: 2, pixelOverlayPadding: 'opacity-100 sm:p-2 md:p-8' },
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectsPage,
      meta: { scene: 1, pixelOverlayPadding: 'opacity-100 sm:p-2 md:p-18' },
    },
    {
      path: "/resume",
      name: "Resume",
      component: ResumePage,
      meta: { scene: 0, pixelOverlayPadding: 'opacity-100 sm:p-2 md:p-6' },
    },
    {
      path: "/social",
      name: "Social",
      component: SocialPage,
      meta: { scene: 3, pixelOverlayPadding: 'opacity-100 p-2' },
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogPage,
      meta: { scene: 4, pixelOverlayPadding: 'opacity-100 p-2' },
    },
  ]
});

router.beforeEach(async function(to, _from, next) {
  useBackground().setScene(parallaxSceneData[to.meta.scene as number]);
  usePixelOverlayBoder().setPadding(to.meta.pixelOverlayPadding as string);
  return next();
})

export default router;
