export interface ImageData {
  src: string | string[],
  scrollSpeedX: number,
  scrollSpeedY: number,
  fps: number,
  count: number,
  active: number,
  image: HTMLImageElement | HTMLImageElement[] | null,
}
export interface SceneData {
  position: Camera2D,
  active: boolean,
}

export interface Camera2D {
  x: number,
  y: number,
  zoom: number,
}
