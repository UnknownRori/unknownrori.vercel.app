import { parallaxSceneData } from '@/data/Parallax';
import { BlogPage, ProfilePage, ProjectsPage, ResumePage, SocialPage, SplashPage } from '@/pages';
import useBackground from '@/stores/useBackground';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Splash",
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
      name: "Projects",
      component: ProjectsPage,
      meta: { scene: 1 },
    },
    {
      path: "/resume",
      name: "Resume",
      component: ResumePage,
      meta: { scene: 0 },
    },
    {
      path: "/social",
      name: "Social",
      component: SocialPage,
      meta: { scene: 3 },
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogPage,
      meta: { scene: 4 },
    },
  ]
});

router.beforeEach(async function(to, _from, next) {
  useBackground().setScene(parallaxSceneData[to.meta.scene as number]);
  return next();
})

export default router;
