import { parallaxSceneData } from '@/data/Parallax';
import { ProfilePage, SplashPage, WorkPage, ResumePage, NotFound } from '@/pages';
import useParallaxBackgroundStore from '@/stores/useParallaxBackgroundStore';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: SplashPage,
      meta: { scene: 0 },
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfilePage,
      meta: { scene: 2 },
    },
    {
      path: "/projects",
      name: "Work",
      component: WorkPage,
      meta: { scene: 1 },
    },
    {
      path: "/resume",
      name: "Resume",
      component: ResumePage,
      meta: { scene: 4 },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: { scene: 0 },
    },
  ]
});

router.beforeEach(async function(to, _from, next) {
  useParallaxBackgroundStore().setScene(parallaxSceneData[to.meta.scene as number]);
  return next();
})

export default router;
