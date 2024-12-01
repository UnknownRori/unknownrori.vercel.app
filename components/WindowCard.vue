<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="flex w-full flex-col rounded-lg bg-black bg-opacity-50 shadow-neon-sm duration-500 hover:shadow-neon-md"
  >
    <header class="relative flex flex-row bg-gray-800 p-2">
      <div class="mx-2 flex items-center justify-center gap-2">
        <button class="size-4 rounded-full bg-red-600 shadow"></button>
        <button class="size-4 rounded-full bg-yellow-600 shadow"></button>
        <button class="size-4 rounded-full bg-green-600 shadow"></button>
      </div>
      <h3
        class="pointer-events-none absolute w-full -translate-y-1 text-center font-semibold"
      >
        {{ title }}
      </h3>
    </header>
    <div class="size-full">
      <slot />
    </div>
  </div>
</template>
