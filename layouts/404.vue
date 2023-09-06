<script lang="ts" setup>
const customSeo = generateSeoMeta({ title: "UnknownRori - 404" });
useSeoMeta(customSeo as any);
</script>

<template>
  <NuxtLayout name="default-layout">
    <slot />
  </NuxtLayout>
</template>
