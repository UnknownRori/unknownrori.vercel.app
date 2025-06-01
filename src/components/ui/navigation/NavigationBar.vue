<script setup lang="ts">
import NavLink from './NavLink.vue';
import { cn } from '@/utils';
//import { Hamburger } from '@/components/ui/icons';
import { useRoute } from 'vue-router';

defineProps<{
  class?: string,
}>();

const route = useRoute();
const links = [
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
  //{
  //  name: 'Social',
  //  href: '/social',
  //},
  //{
  //  name: 'Blog',
  //  href: '/blog',
  //},
]
</script>

<template>
  <nav :class="cn('print:hidden absolute w-full z-100', $props.class)" key='navbar'>
    <div class="flex justify-center items-center w-full gap-8 p-4">
      <ul class="flex flex-row gap-4">
        <li :key='link.name' v-for='link in links'>
          <NavLink :href='link.href' :class='cn(`text-white/50 hover:text-white sm:text:md md:text-lg
            lg:text-xl font-bold duration-300`)' :isActive='route.name == link.name'>
            {{ link.name }}
          </NavLink>
        </li>
      </ul>

    </div>
  </nav>
</template>
