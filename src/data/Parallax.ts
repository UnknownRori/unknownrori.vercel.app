import type { ImageData, SceneData } from '@/models/Parallax.ts';

export const parallaxImageData = [
  {
    src: './assets/bg/bg.webp',
    offsetY: 0,
    offsetX: 0,
    scrollSpeedX: 0.0,
    scrollSpeedY: 0.0,
  },
  {
    src: './assets/bg/sky.webp',
    offsetY: 0,
    offsetX: 0,
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.2,
  },
  {
    src: './assets/bg/horizon.webp',
    offsetY: 0,
    offsetX: 0,
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.75,
  },
  {
    src: './assets/bg/very-far.webp',
    offsetY: 400,
    offsetX: 0,
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.75,
  },
  {
    src: './assets/bg/far-between-very-far.webp',
    offsetY: 400,
    offsetX: 0,
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.70,
  },
  {
    src: './assets/bg/far.webp',
    offsetY: 350,
    offsetX: 0,
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.70,
  },
  {
    src: './assets/bg/light-show.webp',
    offsetY: 450,
    offsetX: 0,
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.70,
  },
  {
    src: ['./assets/bg/scene.png', './assets/bg/scene-1.png', './assets/bg/scene-2.png', './assets/bg/scene-3.png'],
    offsetY: 0,
    offsetX: 0,
    scrollSpeedX: 1,
    scrollSpeedY: 1,
    fps: 30,
    count: 0,
    active: 0,
  },
  {
    src: './assets/bg/overlay.webp',
    offsetY: 0,
    offsetX: 0,
    scrollSpeedX: 0.0,
    scrollSpeedY: 0.0,
  },
] as ImageData[];

export const parallaxSceneData = [
  // Sky [0]
  {
    position: {
      x: 0,
      y: -2000,
      zoom: 1,
    },
  },
  // Base [1]
  {
    position: {
      x: 0,
      y: 0,
      zoom: 1,
    },
  },
  // Lilith [2]
  {
    position: {
      x: 275,
      y: 280,
      zoom: 2,
    },
  },
  // Left Lilith [3]
  {
    position: {
      x: -400,
      y: 280,
      zoom: 2,
    },
  },
  // City [4]
  {
    position: {
      x: 0,
      y: -900,
      zoom: 1.0,
    },
  },
] as SceneData[];
