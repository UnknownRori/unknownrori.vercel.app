<script lang='ts' setup>
import Tag from './Tag.vue';
defineProps<{
  title: string,
  link: string,
  location: string,
  time: string,
}>();
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h3 class="font-bold">
        {{ $props.title }}
      </h3>

      <p class="text-sm text-gray-600">
        {{ $props.time }}
      </p>
    </div>
    <a :href="$props.link" target="_blank" class="text-sm text-blue-700">
      {{ $props.location }}
    </a>

  </div>
</template>
