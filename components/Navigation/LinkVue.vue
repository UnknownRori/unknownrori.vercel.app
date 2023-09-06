<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  active?: boolean;
  disabled?: boolean;
  href: string;
}>();

const DynamicIcon = props.icon;
</script>

<template>
  <li class="flex gap-1 justify-center items-center">
    <DynamicIcon
      :class="`w-6 h-6 ${$props.disabled ? 'text-cod-gray-800' : 'text-white'}`"
      :fontControlled="false"
      filled
    />
    <NuxtLink v-if="!$props.disabled" :to="$props.href">
      {{ $props.title }}
    </NuxtLink>
    <span v-else class="text-cod-gray-800 cursor-not-allowed">
      {{ $props.title }}
    </span>
  </li>
</template>
