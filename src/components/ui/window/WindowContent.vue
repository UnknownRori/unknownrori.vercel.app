<script lang='ts' setup>
import { cn } from '@/utils';
defineProps<{
  class?: string,
}>();
</script>

<template>
  <div :class="cn('flex-1 border-l-2 border-r-2 border-b-2 border-gray-700 p-2')">
    <slot />
  </div>
</template>
