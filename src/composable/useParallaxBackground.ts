import { parallaxImageData } from '@/data/Parallax.ts';
import type { ImageData } from '@/models/Parallax';
import useBackground from '@/stores/useBackground';
import { onMounted, type Ref } from 'vue';

function loadImages(layers: ImageData[]): Promise<void[]> {
  return Promise.all(layers.map(layer => {
    return new Promise<void>((resolve) => {
      if (Array.isArray(layer.src)) {
        layer.image = [];
        layer.count = 0;
        for (const src of layer.src) {
          const img = new Image();
          img.src = src;
          layer.image.push(img);
        }
        resolve();
      } else {
        const img = new Image();
        img.src = layer.src;
        img.onload = () => {
          layer.image = img;
        }
      }
      resolve();
    })
  }))
}

export default function useParallaxBackground(canvas: Ref<HTMLCanvasElement>) {
  const parallax = useBackground();

  function loop() {
    parallax.rawDraw(parallaxImageData[0], 0, 0, 1);
    for (const image of parallaxImageData) {
      parallax.draw(image);
    }
    parallax.drawRain();
    parallax.drawVignette();
    requestAnimationFrame(loop);
  }

  onMounted(() => {
    (async () => {
      await loadImages(parallaxImageData);
      parallax.setCanvas(canvas.value);
      loop();
    })();
  })
}
