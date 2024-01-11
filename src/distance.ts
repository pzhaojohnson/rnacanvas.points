import type { Point } from './Point';

/**
 * Returns the distance between the two points.
 */
export function distance(point1: Point, point2: Point): number {
  let dx = point2.x - point1.x;
  let dy = point2.y - point1.y;

  return (dx**2 + dy**2) ** 0.5;
}
