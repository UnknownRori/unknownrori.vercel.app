<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useVisualizer } from '@/composable/useAudioVisualizer';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const audioSrc = '/assets/bgm/󧍭󧍾󧎇󧎌󧎂󧎈󧎇 󧍥󧎈󧎈󧎉.mp3';
const { init } = useVisualizer();

const onPlay = (): void => {
  if (audioRef.value && canvasRef.value) {
    init(audioRef.value, canvasRef.value);
  }
  isPlaying.value = true;
};

onMounted(() => {
  audioRef.value?.play().catch(() => {});
});
</script>

<template>
  <div class="fixed bottom-0 print:hidden w-full flex justify-center items-center p-2 mb-6 select-none">
    <div class="flex items-center">

      <audio
        ref="audioRef"
        :src="audioSrc"
        loop
        @play="onPlay"
        @pause="onPause"
      />

      <canvas
        ref="canvasRef"
        width="180"
        height="40"
        class="opacity-90"
      />
    </div>
  </div>
</template>
