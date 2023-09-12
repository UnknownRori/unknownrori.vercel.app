<script setup lang="ts">
import TagIcon from "~/assets/icon/Tag.svg";

defineProps<{
  text: string;
}>();
</script>

<template>
  <button
    class="flex items-center justify-center gap-2 rounded bg-cod-gray-700 bg-opacity-40 p-1"
  >
    <TagIcon class="w-4" :font-controlled="false" filled />
    <span class="text-xs">
      {{ text }}
    </span>
  </button>
</template>
