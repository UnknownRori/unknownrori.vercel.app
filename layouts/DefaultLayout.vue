<script setup lang="ts">
import type { Container } from 'tsparticles-engine';

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause();
  setTimeout(() => container.play(), 2000);
};

useBlobity();
</script>

<template>
  <EditorOverlayVue />


  <NuxtParticles id="tsparticles" url="/particles.json" @load="onLoad"></NuxtParticles>
  <div
    class="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full bg-black bg-[url(/image/background.webp)] bg-cover bg-no-repeat">
  </div>
  <div
    class="m-0 flex min-h-screen w-full flex-col bg-black bg-opacity-80 bg-[url(~/assets/icon/Grid.svg)] p-0 text-white">
    <NavigationBarVue />
    <div class="mx-10 h-8 overflow-hidden">
      <div class="bg-[url(~/assets/icon/Seperator.svg)] bg-repeat-x py-4"></div>
    </div>
    <NuxtLoadingIndicator />

    <slot />
  </div>
</template>
