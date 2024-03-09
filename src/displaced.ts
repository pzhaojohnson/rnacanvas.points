import type { Point } from './Point';

/**
 * A two-dimensional vector.
 */
export type Vector = {
  x: number;
  y: number;
};

/**
 * Returns a new point that is the given point displaced by the given vector.
 *
 * (Does not modify the input point.)
 */
export function displaced(p: Point, v: Vector): Point {
  return {
    x: p.x + v.x,
    y: p.y + v.y,
  };
}
