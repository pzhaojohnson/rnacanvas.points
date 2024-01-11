import type { Point } from './Point';

import { mean } from '@rnacanvas/math';

/**
 * Returns the centroid of the given points.
 *
 * Returns a point with X and Y coordinates of NaN for an empty array of points.
 */
export function centroid(points: Point[]): Point {
  return {
    x: mean(points.map(p => p.x)),
    y: mean(points.map(p => p.y)),
  };
}
