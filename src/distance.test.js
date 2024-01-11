import { distance } from './distance';

test('distance function', () => {
  expect(distance({ x: 0, y: 0 }, { x: 3, y: 4 })).toBeCloseTo(5);
  expect(distance({ x: 88, y: 187 }, { x: 67, y: 207 })).toBeCloseTo(29);
  expect(distance({ x: -12, y: 32 }, { x: 148, y: -199 })).toBeCloseTo(281);

  // are the same point
  expect(distance({ x: 55, y: 72 }, { x: 55, y: 72 })).toBeCloseTo(0);

  // all zeros
  expect(distance({ x: 0, y: 0 }, { x: 0, y: 0 })).toBeCloseTo(0);
});
