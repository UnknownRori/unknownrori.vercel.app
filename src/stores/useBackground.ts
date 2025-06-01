import type { ImageData, SceneData } from "@/models/Parallax";
import { defineStore } from "pinia";
import { onMounted, onUnmounted } from "vue";
import useParallaxCamera from "./useParallaxCamera";

const FALL_CONSTANT = 2;
const TOTAL_RAIN = 512;
interface RainDropFX {
  x: number,
  y: number,
}

const useBackground = defineStore('_bg', function() {
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let width: number = 0;
  let height: number = 0;
  let rain: RainDropFX[] = [];
  const camera = useParallaxCamera();

  onMounted(() => {
    window.addEventListener('resize', _resizeCanvas);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', _resizeCanvas);
  })

  function setCanvas(newCanvas: HTMLCanvasElement) {
    canvas = newCanvas;
    ctx = newCanvas.getContext("2d") as CanvasRenderingContext2D;
    _resizeCanvas();

    rain = Array.from({ length: TOTAL_RAIN }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
    }));
  }

  function rawDraw(image: ImageData, x: number, y: number, zoom: number) {
    if (!image.image || ctx == null) return;

    const offsetX = x * image.scrollSpeedX;
    const offsetY = y * image.scrollSpeedY;

    const imageWidth = Array.isArray(image.image) ? image.image[0].width : image.image.width;
    const imageHeight = Array.isArray(image.image) ? image.image[0].height : image.image.height;

    const canvasRatio = width / height;
    const imageRatio = imageWidth / imageHeight;
    let baseW = 0, baseH = 0;
    if (canvasRatio > imageRatio) {
      baseW = imageWidth;
      baseH = imageWidth / canvasRatio;
    } else {
      baseH = imageHeight;
      baseW = imageHeight * canvasRatio;
    }

    const sourceW = baseW / zoom;
    const sourceH = baseH / zoom;

    const centerX = offsetX + (imageWidth - sourceW) / 2;
    const centerY = offsetY + (imageHeight - sourceH) / 2;

    if (Array.isArray(image.image)) {
      image.count += 1;
      if (image.count > image.fps) {
        image.active = (image.active + 1) % image.image.length
        image.count = 0;
      }
      ctx.drawImage(
        image.image[image.active],
        centerX, centerY,
        sourceW, sourceH,
        0, 0, width, height,
      )
    } else {
      ctx.drawImage(
        image.image,
        centerX, centerY,
        sourceW, sourceH,
        0, 0, width, height,
      )
    }
  }

  function draw(image: ImageData) {
    rawDraw(image, camera.camera.x, camera.camera.y, camera.camera.zoom);
  }

  function drawVignette() {
    if (ctx == null) return;

    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, width / 4,
      width / 2, height / 2, width / 1.2
    );

    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function drawRain() {
    if (ctx == null) return;

    ctx.globalAlpha = 0.5;
    for (const fx of rain) {
      ctx.beginPath();
      ctx.arc(fx.x, fx.y, 1, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      fx.y += FALL_CONSTANT;
      if (fx.y > height) fx.y = 0;
    }
    ctx.globalAlpha = 1.;
  }

  function _resizeCanvas() {
    if (canvas == null) return;

    width = window.innerWidth
    height = window.innerHeight

    canvas.width = width
    canvas.height = height
  }

  function setScene(scene: SceneData) {
    camera.animateCamera(scene.position)
  }

  return {
    setCanvas, setScene,
    rawDraw, draw, drawVignette, drawRain,
  }
});
export default useBackground;
