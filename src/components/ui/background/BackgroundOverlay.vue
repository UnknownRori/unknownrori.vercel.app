<script setup lang="ts">
import { ref, type Ref } from 'vue';
import useParallaxBackground from '@/composable/useParallaxBackground.ts';

const canvasRef = ref<HTMLCanvasElement | null>(null);

useParallaxBackground(
  canvasRef as Ref<HTMLCanvasElement>,
);
</script>

<template>
  <canvas ref="canvasRef" class="block print:hidden w-full h-full fixed top-0 left-0 z-[-1]"></canvas>
</template>
