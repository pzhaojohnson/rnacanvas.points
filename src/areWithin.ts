import type { Point } from './Point';

import { distance } from './distance';

/**
 * Returns true if the distance between the two points
 * is less than or equal to the specified max distance.
 *
 * Returns false otherwise.
 */
export function areWithin(point1: Point, point2: Point, maxDistance: number): boolean {
  return distance(point1, point2) <= maxDistance;
}
