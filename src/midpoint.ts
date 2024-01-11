import type { Point } from './Point';

import { centroid } from './centroid';

/**
 * Returns the midpoint between two points.
 */
export function midpoint(point1: Point, point2: Point): Point {
  return centroid([point1, point2]);
}
