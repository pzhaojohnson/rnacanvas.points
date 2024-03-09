import type { Point } from './Point';

/**
 * Returns a deep copy of the given point.
 */
export function deepCopy(p: Point): Point {
  return {
    x: p.x,
    y: p.y,
  };
}
