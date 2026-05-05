<script lang="ts" setup>
import { cn } from '@/utils';
import { RouterLink } from 'vue-router';

defineProps<{
  name: string,
  href: string;
  isActive?: boolean,
}>();

</script>

<template>
 <RouterLink :to='href' :class="cn(`flex justify-center items center relative group uppercase duration-500 py-1 px-3  text-gray-500
 hover:text-white hover:cursor-pointer`, isActive ? 'hover:text-black text-black' : '')">
    <span :class="cn(`absolute top-0 left-0 z-10 h-0.5 w-0 bg-white/20 dark:bg-white
duration-500`, isActive ? 'w-0 bg-white ' : 'group-hover:w-full group-hover:bg-white ')"></span>
    {{ name }}
    <span :class="cn(`absolute bottom-0 right-0 z-10 h-0.5 w-0 bg-white/20 dark:bg-white
duration-500`, isActive ? 'w-0 bg-white animate-pulse' : 'group-hover:w-full group-hover:bg-white ')"></span>
  </RouterLink>
</template>
