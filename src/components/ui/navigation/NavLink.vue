<script lang="ts" setup>
import { cn } from '@/utils';
import { RouterLink } from 'vue-router';

defineProps<{
  href: string;
  isActive?: boolean,
}>();

</script>

<template>
  <!-- TODO: Give this interesting effect when hovered later -->
 <RouterLink :to='href' :class="cn('relative group border-2 p-1 border-white')">
    <slot />
  </RouterLink>
</template>
