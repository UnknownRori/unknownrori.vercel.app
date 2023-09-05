<script setup lang="ts">
defineProps<{
  title: string;
  href: string;
}>();
</script>

<template>
  <li>
    <NuxtLink :to="$props.href">
      {{ $props.title }}
    </NuxtLink>
  </li>
</template>
