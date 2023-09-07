<script setup lang="ts">
defineProps<{
  alt: string;
  src: string;
  href: string;
}>();
</script>

<template>
  <CardVue class="relative w-48 h-40">
    <a
      :href="$props.href"
      target="_blank"
      class="group flex flex-col w-full h-full"
    >
      <div
        class="relative flex justify-center items-center bg-cod-gray-900 bg-opacity-50 px-4 py-1 rounded-t-md"
      >
        <div
          class="absolute top-0 left-0 bg-cod-gray-800 w-0 h-full group-hover:w-full duration-500 transition-all rounded-t-md"
        ></div>
        <span class="relative">{{ $props.alt }}</span>
      </div>
      <div class="relative flex justify-center items-center h-full">
        <img :src="$props.src" :alt="$props.alt" class="w-24 p-2" />
        <span
          class="absolute bottom-0 left-0 bg-cod-gray-500 w-full h-0 bg-opacity-10 group-hover:h-full duration-500 transition-all rounded-b-md"
        ></span>
      </div>
    </a>
  </CardVue>
</template>
