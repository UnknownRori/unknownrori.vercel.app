<script setup lang="ts">
import TagIcon from "~/assets/icon/Tag.svg";

defineProps<{
  text: string,
}>();
</script>

<template>
  <span class="flex gap-2 justify-center items-center bg-opacity-40 bg-cod-gray-700 rounded p-1">
    <TagIcon class="w-4" :font-controlled="false" filled />
    <span class="text-xs">
      {{ text }}
    </span>
  </span>
</template>
