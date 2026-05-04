<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useVisualizer } from '@/composable/useAudioVisualizer';
import { Play, Pause, Volume2, VolumeX } from '@lucide/vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const isMuted = ref(false);
const volume = ref(1);
const audioSrc = '/assets/bgm/󧍭󧍾󧎇󧎌󧎂󧎈󧎇 󧍥󧎈󧎈󧎉.mp3';
const { init } = useVisualizer();

const onPlay = (): void => {
  if (audioRef.value && canvasRef.value) {
    init(audioRef.value, canvasRef.value);
  }
  isPlaying.value = true;
};

const onPause = (): void => {
  isPlaying.value = false;
};

const togglePlay = (): void => {
  if (!audioRef.value) return;
  if (isPlaying.value) {
    audioRef.value.pause();
  } else {
    audioRef.value.play().catch(() => {});
  }
};

const toggleMute = (): void => {
  if (!audioRef.value) return;
  isMuted.value = !isMuted.value;
  audioRef.value.muted = isMuted.value;
};

const onVolumeChange = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  volume.value = Number(target.value);
  if (audioRef.value) {
    audioRef.value.volume = volume.value;
    isMuted.value = volume.value === 0;
  }
};

onMounted(() => {
  audioRef.value?.play().catch(() => {});
});
</script>

<template>
  <div class="fixed bottom-0 print:hidden w-full flex justify-center items-center p-2 mb-6 select-none">
    <div class="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">

      <audio
        ref="audioRef"
        :src="audioSrc"
        loop
        @play="onPlay"
        @pause="onPause"
      />

      <button
        @click="togglePlay"
        class="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-white"
      >
        <Play v-if="!isPlaying" class="w-4 h-4 fill-white" />
        <Pause v-else class="w-4 h-4 fill-white" />
      </button>

      <canvas
        ref="canvasRef"
        width="180"
        height="40"
        class="opacity-90"
      />

      <button
        @click="toggleMute"
        class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition text-white"
      >
        <Volume2 v-if="!isMuted" class="w-4 h-4" />
        <VolumeX v-else class="w-4 h-4" />
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        :value="volume"
        @input="onVolumeChange"
        class="w-16 h-1 accent-white cursor-pointer opacity-70 hover:opacity-100 transition"
      />
    </div>
  </div>
</template>
