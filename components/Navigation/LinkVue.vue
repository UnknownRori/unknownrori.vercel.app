<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  disabled?: boolean;
  href: string;
}>();

// const isActive = useRoute().path === props.href;
const DynamicIcon = props.icon;
</script>

<template>
  <li class="group relative">
    <span
      class="absolute -top-2 left-0 bg-cod-gray-800 w-0 h-[2px] group-hover:w-full duration-300 z-10"
    ></span>
    <div
      class="relative flex gap-1 justify-center items-center p-1 z-10 text-white"
    >
      <DynamicIcon
        :class="`w-6 h-6 ${
          $props.disabled ? 'text-cod-gray-800' : 'text-white'
        }`"
        :fontControlled="false"
        filled
      />
      <NuxtLink v-if="!$props.disabled" :to="$props.href">
        {{ $props.title }}
      </NuxtLink>
      <span v-else class="text-cod-gray-800 cursor-not-allowed">
        {{ $props.title }}
      </span>
    </div>
    <span
      class="absolute -bottom-2 right-0 bg-cod-gray-800 w-0 h-[2px] group-hover:w-full duration-300 z-10"
    ></span>
  </li>
</template>
