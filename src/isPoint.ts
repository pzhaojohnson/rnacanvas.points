import type { Point } from './Point';

import { isNonNullObject } from '@rnacanvas/value-check';

import { isNumber } from '@rnacanvas/value-check';

export function isPoint(value: unknown): value is Point {
  return (
    isNonNullObject(value)
    && isNumber(value.x)
    && isNumber(value.y)
  );
}
