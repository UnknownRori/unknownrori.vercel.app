<script setup lang='ts'>
import { cn } from '@/utils';

defineProps<{
  class: string,
}>();
</script>

<template>
  <div :class="cn(`relative border-white border-2 bg-gray-900/50 p-6`,
    $props.class)">
    <slot />
  </div>
</template>
