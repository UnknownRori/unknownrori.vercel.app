<script lang='ts' setup>
defineProps<{
  name: string,
  link: string,
  time: string,
}>();
</script>

<template>
  <div class="flex justify-between">
    <a :href="$props.link">
      {{ $props.name }}
    </a>

    <span class="text-gray-600">
      {{ $props.time }}
    </span>
  </div>
</template>
