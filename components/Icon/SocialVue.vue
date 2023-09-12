<script setup lang="ts">
defineProps<{
  alt: string;
  src: string;
  href: string;
}>();
</script>

<template>
  <CardVue class="relative h-40 w-48 bg-opacity-80">
    <a
      :href="$props.href"
      target="_blank"
      class="group flex h-full w-full flex-col"
    >
      <div
        class="relative flex items-center justify-center rounded-t-md bg-cod-gray-900 bg-opacity-50 px-4 py-1"
      >
        <div
          class="absolute left-0 top-0 h-full w-0 rounded-t-md bg-cod-gray-800 transition-all duration-500 group-hover:w-full"
        ></div>
        <span class="relative">{{ $props.alt }}</span>
      </div>
      <div class="relative flex h-full items-center justify-center">
        <NuxtImg :src="$props.src" class="w-24 p-2" placeholder />
        <span
          class="absolute bottom-0 left-0 h-0 w-full rounded-b-md bg-cod-gray-500 bg-opacity-10 transition-all duration-500 group-hover:h-full"
        ></span>
      </div>
    </a>
  </CardVue>
</template>
