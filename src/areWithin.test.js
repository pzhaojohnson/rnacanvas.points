import { areWithin } from './areWithin';

test('areWithin function', () => {
  // the two points are the same
  expect(areWithin({ x: 7, y: -8 }, { x: 7, y: -8 }, 0)).toBe(true);
  expect(areWithin({ x: 7, y: -8 }, { x: 7, y: -8 }, 1e-6)).toBe(true);
  expect(areWithin({ x: 7, y: -8 }, { x: 7, y: -8 }, 10)).toBe(true);
  expect(areWithin({ x: 7, y: -8 }, { x: 7, y: -8 }, -10)).toBe(false);

  // the two points are very close to each other
  expect(areWithin({ x: 7, y: -8 }, { x: 7, y: -8 + 1e-6 }, 0)).toBe(false);
  expect(areWithin({ x: 7, y: -8 }, { x: 7, y: -8 + 1e-6 }, 1e-5)).toBe(true);
  expect(areWithin({ x: 7, y: -8 }, { x: 7, y: -8 + 1e-6 }, 12)).toBe(true);
  expect(areWithin({ x: 7, y: -8 }, { x: 7, y: -8 + 1e-6 }, -12)).toBe(false);

  // the distance between the two points is equal to 5
  expect(areWithin({ x: 2, y: 24 }, { x: 5, y: 20 }, 0)).toBe(false);
  expect(areWithin({ x: 2, y: 24 }, { x: 5, y: 20 }, 2)).toBe(false);
  expect(areWithin({ x: 2, y: 24 }, { x: 5, y: 20 }, 5)).toBe(true);
  expect(areWithin({ x: 2, y: 24 }, { x: 5, y: 20 }, 5 - 1e-6)).toBe(false);
  expect(areWithin({ x: 2, y: 24 }, { x: 5, y: 20 }, 5 + 1e-6)).toBe(true);
  expect(areWithin({ x: 2, y: 24 }, { x: 5, y: 20 }, 10)).toBe(true);
  expect(areWithin({ x: 2, y: 24 }, { x: 5, y: 20 }, -10)).toBe(false);
});
