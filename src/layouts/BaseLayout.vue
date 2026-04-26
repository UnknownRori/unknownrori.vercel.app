<script setup lang="ts">
import { useRoute } from 'vue-router';
import {BackgroundComponent} from '@/components/ui/background';
</script>

<template>
  <div class="relative h-screen w-screen">

    <BackgroundComponent />

    <div class="w-screen h-screen absolute overflow-x-hidden">
      <slot />
    </div>

    <Footer />
  </div>
</template>
