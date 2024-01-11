import type { Point } from './Point';

export type Vector = {
  x: number;
  y: number;
};

/**
 * Returns the displacement from the first point to the second point
 * (i.e., the returned displacement can be added to the first point to obtain the second point).
 */
export function displacement(fromPoint: Point, toPoint: Point): Vector {
  return {
    x: toPoint.x - fromPoint.x,
    y: toPoint.y - fromPoint.y,
  };
}
