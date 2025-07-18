<script lang="ts" setup>
import { cn } from '@/utils';
import usePixelOverlayBoder from '@/stores/usePixelOverlayBorder';
const useOverlayBorder = usePixelOverlayBoder();
</script>
<template>
  <div :class="cn('absolute top-0 left-0 w-screen h-screen pointer-events-none animate-pulse duration-1000',
    useOverlayBorder.padding)">
    <div id="border" class="w-full h-full border-pixel">
    </div>
  </div>
</template>
