import type { Point } from './Point';

import { isPoint } from './isPoint';

import { isFiniteNumber } from '@rnacanvas/value-check';

/**
 * Returns true if the value is a point object whose X and Y coordinates are finite numbers
 * (i.e., not NaN, Infinity, -Infinity, etc.).
 *
 * Returns false otherwise.
 */
export function isFinitePoint(value: unknown): value is Point {
  return (
    isPoint(value)
    && isFiniteNumber(value.x)
    && isFiniteNumber(value.y)
  );
}
