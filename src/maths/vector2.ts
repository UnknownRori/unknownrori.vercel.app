export class Vector2 {
  public constructor(public x: number, public y: number) { }
}

export function vec2(x: number, y: undefined | number = undefined): Vector2 {
  if (y == undefined) {
    y = x;
  }
  return new Vector2(x, y);
}
