<script setup lang="ts">
import { RealtimeClock } from '@/components';
import { NavigationBar, Footer } from '@/components/ui/navigation';
import { BackgroundComponent } from '@/components/ui/background';
</script>

<template>
  <div class="relative h-screen w-screen">

    <div class="crt-overlay"></div>
    <BackgroundComponent />
    <NavigationBar />

    <div class="w-screen h-screen absolute overflow-x-hidden">
      <slot />
    </div>

    <Footer />
    <RealtimeClock
      class='absolute right-0 bottom-0 mb-12 mr-16 text-4xl text-white'
    />
  </div>
</template>
