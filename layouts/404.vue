<script lang="ts" setup>
const customSeo = generateSeoMeta({ title: "UnknownRori - 404" });
useSeoMeta(customSeo as any);
</script>

<template>
  <NuxtLayout name="default-layout">
    <main
      class="flex flex-col justify-center items-center gap-4 min-h-screen min-w-screen"
    >
      <h1 class="text-6xl">404</h1>
      <h2 class="text-4xl">Page not found!</h2>
    </main>
  </NuxtLayout>
</template>
