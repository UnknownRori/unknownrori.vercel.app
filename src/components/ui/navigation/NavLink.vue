<script lang="ts" setup>
import { cn } from '@/utils';
import { RouterLink } from 'vue-router';

defineProps<{
  href: string;
  isActive?: boolean,
}>();

</script>

<template>
  <div class="relative group font-poet">
    <span :class="cn(`absolute -bottom-1 left-0 z-10 h-[2px] w-0 bg-white/20 dark:bg-white
duration-500`, isActive ? 'w-full bg-white ' : 'group-hover:w-full group-hover:bg-white ')"></span>
    <RouterLink :to="href" :class="`tracking dark:text-white ${isActive ? `font-bold text-white
text-shadow-lg text-shadow-white/20 animate-pulse` : ''}`">
      <slot />
    </RouterLink>

    <span :class="cn(`absolute -bottom-1 right-0 z-10 h-[2px] w-0 bg-white/20 dark:bg-white
duration-500`, isActive ? 'w-full bg-white animate-pulse' : 'group-hover:w-full group-hover:bg-white ')"></span>
  </div>
</template>
