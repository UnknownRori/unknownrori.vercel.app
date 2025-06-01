<script lang='ts' setup>
import Tag from './Tag.vue';
defineProps<{
  title: string,
  description: string,
  time: string,
  items: string[],
  tags: string[],
}>();
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h3 class="font-bold">
        {{ $props.title }}
      </h3>

      <p class="text-gray-600">
        {{ $props.time }}
      </p>
    </div>
    <p class="text-sm text-gray-500">
      {{ $props.description }}
    </p>

    <ul class="list-disc ml-6">
      <li :key='item' v-for='item in items' class="text-sm">
        {{ item }}
      </li>
    </ul>

    <div class="flex gap-2 mt-2">
      <Tag :key='item' v-for='item in $props.tags'>
        {{ item }}
      </Tag>
    </div>
  </div>
</template>
