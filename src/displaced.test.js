import { displaced } from './displaced';

test('displaced function', () => {
  expect(displaced({ x: 0, y: 0 }, { x: 0, y: 0 })).toStrictEqual({ x: 0, y: 0 });

  expect(displaced({ x: 0, y: 0 }, { x: 5, y: -3 })).toStrictEqual({ x: 5, y: -3 });

  expect(displaced({ x: 1, y: 52 }, { x: 211, y: -1203 })).toStrictEqual({ x: 212, y: -1151 });

  expect(displaced({ x: -19, y: 3000 }, { x: 54, y: -82 })).toStrictEqual({ x: 35, y: 2918 });

  expect(displaced({ x: 0.1, y: 5.7 }, { x: 2.11, y: -0.82 }).x).toBeCloseTo(2.21);
  expect(displaced({ x: 0.1, y: 5.7 }, { x: 2.11, y: -0.82 }).y).toBeCloseTo(4.88);
});
