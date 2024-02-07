import type { Point } from './Point';

import { displacement } from './displacement';

/**
 * Calculates the direction of a vector.
 */
import { direction as directionV } from '@rnacanvas/vectors';

/**
 * Returns the angle (in radians) that is the direction
 * from the first point to the second point
 * (relative to a horizontal line pointing in the positive X direction).
 *
 * Will return a finite number if the two points are exactly the same,
 * though it is not firmly defined what exactly that number will be.
 */
export function direction(fromPoint: Point, toPoint: Point): number {
  return directionV(displacement(fromPoint, toPoint));
}
