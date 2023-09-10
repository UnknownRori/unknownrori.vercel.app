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
    class="group flex justify-center items-start tracking-widest font-medium duration-500`"
  >
    <NuxtLink
      v-if="!$props.disabled"
      :to="$props.href"
      :class="`relative flex justify-evenly gap-2 px-4 py-2 bg-opacity-50 duration-500 sm:w-full sm:justify-start xl:w-auto ${
        isActive
          ? 'text-white bg-cod-gray-700 pb-4 rounded-t'
          : 'text-cod-gray-400 rounded bg-cod-gray-950'
      } z-10`"
    >
      <span
        class="absolute -top-1 left-0 bg-cod-gray-500 w-0 h-[2px] group-hover:w-full duration-300"
      ></span>
      <span
        class="absolute top-0 left-0 h-full w-0 group-hover:w-full duration-300 z-0 bg-opacity-10 rounded group-hover:bg-cod-gray-800"
      ></span>
      <DynamicIcon
        :class="`w-6 h-6 z-10 ${
          isActive
            ? 'text-white'
            : $props.disabled
            ? 'text-cod-gray-800'
            : 'text-cod-gray-400'
        } `"
        :font-controlled="false"
        filled
      />
      <span class="z-10">
        {{ $props.title }}
      </span>
      <span
        :class="`absolute -bottom-1 right-0 bg-cod-gray-500 w-0 h-[2px] duration-300 z-10 ${
          isActive ? 'group-hover:w-0' : 'group-hover:w-full '
        }`"
      ></span>
    </NuxtLink>

    <span
      v-else
      class="flex relative justify-evenly gap-2 text-cod-gray-800 px-4 py-2 pb-2 mb-2 z-10 sm:w-full sm:justify-start xl:w-auto cursor-not-allowed"
    >
      <span
        class="absolute -top-1 left-0 bg-cod-gray-500 w-0 h-[2px] group-hover:w-full duration-300"
      ></span>
      <DynamicIcon
        :class="`w-6 h-6 z-10 ${
          isActive
            ? 'text-white'
            : $props.disabled
            ? 'text-cod-gray-800'
            : 'text-cod-gray-400'
        } `"
        :font-controlled="false"
        filled
      />
      <span>
        {{ $props.title }}
      </span>
      <span
        class="absolute -bottom-1 right-0 bg-cod-gray-500 w-0 h-[2px] group-hover:w-full duration-300"
      ></span>
    </span>
  </li>
</template>
