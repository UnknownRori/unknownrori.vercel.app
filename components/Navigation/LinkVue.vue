<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  disabled?: boolean;
  href: string;
}>();

const isActive = useRoute().path === props.href;
const DynamicIcon = props.icon;
</script>

<template>
  <li class="group relative px-2 tracking-widest font-medium">
    <div
      :class="`relative flex justify-around gap-3 items-center min-w-[8rem] px-2 py-1 text-white bg-opacity-50 ${
        isActive ? 'text-white pb-8 bg-cod-gray-900 rounded-t' : 'rounded'
      }
        ${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`"
    >
      <span
        :class="`absolute top-0 left-0 h-full w-0 group-hover:w-full duration-300 z-0 bg-opacity-10 ${
          !$props.disabled
            ? 'group-hover:bg-cod-gray-800'
            : 'group-hover:bg-cod-gray-950'
        }`"
      ></span>
      <span
        class="absolute -top-1 left-0 bg-cod-gray-500 w-0 h-[2px] group-hover:w-full duration-300"
      ></span>
      <DynamicIcon
        :class="`w-6 h-6 z-10 ${
          $props.disabled ? 'text-cod-gray-800' : 'text-white'
        }`"
        :fontControlled="false"
        filled
      />
      <NuxtLink v-if="!$props.disabled" :to="$props.href" class="z-10">
        {{ $props.title }}
      </NuxtLink>
      <span v-else class="text-cod-gray-800 z-10">
        {{ $props.title }}
      </span>
      <span
        :class="`absolute -bottom-1 right-0 bg-cod-gray-500 w-0 h-[2px] group-hover:w-full duration-300 z-10 ${
          isActive ? 'hidden' : ''
        }`"
      ></span>
    </div>
  </li>
</template>
