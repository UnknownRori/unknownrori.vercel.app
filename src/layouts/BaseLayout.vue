<script setup lang="ts">
import { NavigationBar, Footer } from '@/components/ui/navigation';
import { SettingsParent } from '@/components/ui/settings';
import { BackgroundOverlay } from '@/components/ui/background';
import { useRoute } from 'vue-router';
</script>

<template>
  <div class="relative h-screen w-screen">
    <BackgroundOverlay />
    <NavigationBar :class='`duration-1000 ${useRoute().name == "Splash" ? "translate-y-[52vh]" : ""}`' />
    <SettingsParent />

    <div class="w-screen h-screen absolute">
      <slot />
    </div>

    <Footer />
  </div>
</template>
