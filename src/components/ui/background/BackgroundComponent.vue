<script setup lang="ts">
import { ref, type Ref } from 'vue';
import useParallaxBackground from '@/composable/useParallaxBackground.ts';

const canvasRef = ref<HTMLCanvasElement | null>(null);

useParallaxBackground(
  canvasRef as Ref<HTMLCanvasElement>,
);
</script>

<template>
  <!-- TODO: Make this into canvas with custom renderer -->
  <canvas ref="canvasRef" class="block print:hidden w-full h-full fixed top-0 left-0 z-[-1] pointer-events-none"></canvas>
  <div class="absolute z-100 top-0 left-0 opacity-50 w-screen h-screen border-pattern print:hidden
    pointer-events-none"></div>
</template>
