<script lang="ts" setup>
import WindowClose from './WindowClose.vue';

defineProps<{
  title: string,
}>();
</script>

<template>
  <div class="border-2  border-gray-700  w-full flex justify-between">
    <div class="mx-2">
      {{title}}
    </div>

    <div class="flex gap-2">
      <WindowClose class="text-white/50" />
    </div>
  </div>
</template>
