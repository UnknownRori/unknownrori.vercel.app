<script setup lang="ts">
import { cn } from '@/utils';

defineProps<{
  src: string,
  alt: string,
  angle: number
  class?: string;
}>();

const clipPath = (angle: number) =>
  `polygon(0 0, 100% ${angle}%, 100% 100%, 0% ${100 - angle}%)`;

</script>

<template>
  <div :class="cn('overflow-hidden', $props.class)" :style="{
    clipPath: clipPath(angle),
  }">
    <div class="w-full h-full overflow-hidden" :style="{ backgroundColor: 'transparent', clipPath: clipPath(angle) }">
      <img :src="src" :alt='alt' class='object-cover object-top w-full h-full'>
    </div>
  </div>
</template>
