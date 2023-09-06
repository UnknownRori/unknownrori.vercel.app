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
      v-if="!$props.disabled"
      :to="$props.href"
    >
      {{ $props.title }}
    </NuxtLink>
    <span v-else
      class="text-gray-500 cursor-not-allowed"
      >
      {{ $props.title }}
    </span>
  </li>
</template>
