<script lang='ts' setup>
defineProps<{
  name: string,
}>();
</script>

<template>
  <span class="bg-white text-xs py-1 px-2 text-black rounded uppercase">
    {{ $props.name }}
  </span>
</template>
