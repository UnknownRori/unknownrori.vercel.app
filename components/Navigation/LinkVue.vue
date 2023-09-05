<script setup lang="ts">
defineProps<{
  title: string;
  active?: boolean;
  disabled?: boolean;
  href: string;
}>();
</script>

<template>
  <li>
    <NuxtLink
      :to="$props.href"
      :disabled="$props.disabled"
      :class="`${$props.disabled ? 'text-gray-500 cursor-not-allowed' : ''}`"
    >
      {{ $props.title }}
    </NuxtLink>
  </li>
</template>
