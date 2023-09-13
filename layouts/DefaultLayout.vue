<script setup lang="ts">
useBlobity();
</script>

<template>
  <EditorOverlayVue />

  <div
    class="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full bg-black bg-[url(/image/background.webp)] bg-cover bg-no-repeat"
  ></div>
  <div
    class="m-0 flex min-h-screen w-full flex-col bg-black bg-opacity-80 bg-[url(~/assets/icon/Grid.svg)] p-0 text-white"
  >
    <NuxtLoadingIndicator />

    <slot />
  </div>
</template>
