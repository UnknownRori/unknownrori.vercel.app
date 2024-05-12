<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="shadow-neon-sm hover:shadow-neon-md duration-500 flex w-full flex-col rounded-lg bg-opacity-50 bg-black">
    <header class="relative flex flex-row bg-gray-800 p-2">
      <div class="mx-2 flex items-center justify-center gap-2">
        <button class="size-4 rounded-full bg-red-600 shadow"></button>
        <button class="size-4 rounded-full bg-yellow-600 shadow"></button>
        <button class="size-4 rounded-full bg-green-600 shadow"></button>
      </div>
      <h3 class="absolute w-full -translate-y-1 text-center font-semibold  pointer-events-none">
        {{ title }}
      </h3>
    </header>
    <div class="w-full h-full">
      <slot />
    </div>
  </div>
</template>
