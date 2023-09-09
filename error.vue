<script setup lang="ts">
const props = defineProps({
  error: Object,
});

onMounted(() => {
  // TODO : Do proper error reporting
  console.error(props.error as any);
});
</script>

<template>
  <NuxtLayout name="default-layout">
    <NuxtLayout name="404"> </NuxtLayout>
  </NuxtLayout>
</template>
