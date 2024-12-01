<script setup lang="ts">
// TODO : Create custom toast notification but this will do for now
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const onLoad = useParticles();
useBlobity();

if (process.client) {
  useToast().warning("Currently in development!");
}
</script>

<template>
  <EditorOverlayVue />

  <NuxtParticles id="pageParticles" url="/particles/stars.json" @load="onLoad"></NuxtParticles>
  <div
    class="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full bg-black bg-[url(/image/19-1366.gif)] bg-cover bg-no-repeat">
  </div>
  <div class="m-0 flex min-h-screen w-full flex-col bg-black bg-opacity-80 bg-[url(/image/Grid.png)] p-0 text-white">
    <NavigationBarVue />
    <div class="mx-10 h-8 overflow-hidden">
      <div class="bg-[url(~/assets/icon/Seperator.svg)] bg-repeat-x py-4"></div>
    </div>
    <NuxtLoadingIndicator />

    <slot />
  </div>
</template>
