<script lang='ts' setup>
import Tag from './ResumeTag.vue';
defineProps<{
  title: string,
  description: string,
  link: string | null,
  time: string,
  tags: string[],
}>();
</script>

<template>
  <div>
    <div class="flex justify-between">
      <a v-if='$props.link != null' :href="$props.link" target="_blank">
        <h3 class="font-bold text-blue-700">
          {{ $props.title }}
        </h3>
      </a>
      <h3 v-else class="font-bold">
        {{ $props.title }}
      </h3>

      <p class="text-sm text-gray-600">
        {{ $props.time }}
      </p>
    </div>

    <p class="text-sm text-gray-500">
      {{ $props.description }}
    </p>

    <div class="flex gap-2 mt-2">
      <Tag :key='item' v-for='item in $props.tags'>
        {{ item }}
      </Tag>
    </div>

  </div>
</template>
