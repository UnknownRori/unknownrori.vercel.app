<script setup lang="ts">
import { cn } from '@/utils';

defineProps<{
  class?: string;
  borderWidth?: string;
}>();
</script>

<template>
  <div :class="cn(`relative
      after:absolute after:block after:top-0 after:left-0 after:w-full after:h-full after:bg-inherit
      after:skew-y-[4deg] after:-z-1 after:border-inherit after:shadow-inherit
`,
    $props.class)">
    <slot />
  </div>
</template>
