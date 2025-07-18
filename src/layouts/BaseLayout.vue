<script setup lang="ts">
import { NavigationBar, Footer } from '@/components/ui/navigation';
//import { SettingsParent } from '@/components/ui/settings';
import { BackgroundOverlay, PixelOverlay } from '@/components/ui/background';
import { useRoute } from 'vue-router';
</script>

<template>
  <div class="relative h-screen w-screen">
    <PixelOverlay />

    <BackgroundOverlay />
    <NavigationBar :class='`duration-1000 ${useRoute().name == "Splash" ? "translate-y-[52vh]" : ""}`' />

    <div class="w-screen h-screen absolute overflow-x-hidden">
      <slot />
    </div>

    <Footer />
  </div>
</template>
