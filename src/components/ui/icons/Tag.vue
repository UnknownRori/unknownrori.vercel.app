<script setup lang="ts">
import { Tag } from 'lucide-vue-next';
</script>
<template>
  <span class="flex justify-center items-center gap-2 text-white font-bold text-xs bg-gray-800
    rounded py-1 px-2 select-none">
    <Tag class="w-4" />
    <slot />
  </span>
</template>
