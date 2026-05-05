import { ref, onUnmounted } from 'vue';

export function useVisualizer() {
  const isInitialized = ref(false);
  let audioCtx: AudioContext | null = null;
  let analyser: AnalyserNode | null = null;
  let animationId: number | null = null;

  const init = (audioElement: HTMLAudioElement, canvasElement: HTMLCanvasElement): void => {
    if (isInitialized.value) return;

    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 128;
    analyser.minDecibels = -70;
    analyser.smoothingTimeConstant = 0.75;

    const source = audioCtx.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    const ctx = canvasElement.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const skipBins = 4;
    const usableBins = bufferLength - skipBins;

    const draw = (): void => {
      animationId = requestAnimationFrame(draw);
      if (analyser) {
        analyser.getByteFrequencyData(dataArray);
      }

      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      const barWidth = (canvasElement.width / usableBins) * 2.5;
      let x = 0;

      for (let i = skipBins; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvasElement.height;
        ctx.fillStyle = `rgba(255, 255, 255, 0.85)`;
        ctx.fillRect(x, canvasElement.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };

    draw();
    isInitialized.value = true;
  };

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId);
    if (audioCtx) audioCtx.close();
  });

  return { init, isInitialized };
}
