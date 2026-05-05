<script setup lang="ts">
import { ref } from 'vue';
import { NavigationBar, Footer } from '@/components/ui/navigation';
import { BackgroundComponent } from '@/components/ui/background';
import { RealtimeClock, LoadingScreen, AudioVisualization } from '@/components';

const isDone = ref(true);
function setDone() {
  isDone.value = false;
}
</script>

<template>
  <div class="relative h-screen print:h-auto w-screen">

    <div class="crt-overlay print:hidden"></div>
    <LoadingScreen :show='isDone' @done='() => setDone()' />
    <BackgroundComponent />
    <NavigationBar />

    <div class="w-screen h-screen print:h-auto absolute overflow-x-hidden">
      <slot />
    </div>

    <AudioVisualization />
    <Footer />
    <RealtimeClock
      class='absolute right-0 bottom-0 mb-12 mr-16 text-4xl text-white print:hidden'
    />
  </div>
</template>
