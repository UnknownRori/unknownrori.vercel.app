<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  disabled?: boolean;
  href: string;
}>();

const DynamicIcon = props.icon;
const isActive = ref(false);

// TODO : Maybe for optimization reason should be extracted into parent component
const route = useRoute();

onMounted(() => {
  isActive.value = props.href === route.path;
});

watch(
  () => route.path,
  () => (isActive.value = props.href === route.path),
);
</script>

<template>
  <li
    class="duration-500` group flex items-start justify-center font-medium tracking-widest"
  >
    <NuxtLink
      v-if="!$props.disabled"
      :to="$props.href"
      :class="`relative flex justify-evenly gap-2 bg-opacity-50 px-4 py-2 duration-500 hover:text-white sm:w-full sm:justify-start xl:w-auto ${
        isActive
          ? 'rounded-t bg-cod-gray-700 pb-4 text-white'
          : 'rounded bg-cod-gray-950 text-cod-gray-400'
      } z-10`"
    >
      <span
        class="absolute -top-1 left-0 h-[2px] w-0 bg-cod-gray-500 duration-300 group-hover:w-full"
      ></span>
      <span
        class="absolute left-0 top-0 z-0 h-full w-0 rounded bg-opacity-10 duration-300 group-hover:w-full group-hover:bg-cod-gray-800"
      ></span>
      <DynamicIcon
        :class="`z-10 h-6 w-6 ${
          isActive
            ? 'text-white'
            : $props.disabled
            ? 'text-cod-gray-800'
            : 'text-cod-gray-400 hover:text-white'
        } `"
        :font-controlled="false"
        filled
      />
      <span class="z-10 sm:block md:hidden xl:block">
        {{ $props.title }}
      </span>
      <span
        :class="`absolute -bottom-1 right-0 z-10 h-[2px] w-0 bg-cod-gray-500 duration-300 ${
          isActive ? 'group-hover:w-0' : 'group-hover:w-full '
        }`"
      ></span>
    </NuxtLink>

    <span
      v-else
      class="relative z-10 mb-2 flex cursor-not-allowed justify-evenly gap-2 px-4 py-2 text-cod-gray-800 sm:w-full sm:justify-start xl:w-auto"
    >
      <span
        class="absolute -top-1 left-0 h-[2px] w-0 bg-cod-gray-500 duration-300 group-hover:w-full"
      ></span>
      <DynamicIcon
        :class="`z-10 h-6 w-6 ${
          isActive
            ? 'text-white'
            : $props.disabled
            ? 'text-cod-gray-800'
            : 'text-cod-gray-400'
        } `"
        :font-controlled="false"
        filled
      />
      <span class="z-10 sm:block md:hidden xl:block">
        {{ $props.title }}
      </span>
      <span
        class="absolute -bottom-1 right-0 h-[2px] w-0 bg-cod-gray-500 duration-300 group-hover:w-full"
      ></span>
    </span>
  </li>
</template>
