import { displacement } from './displacement';

test('displacement function', () => {
  expect(displacement({ x: -1, y: 99 }, { x: -31, y: 65 })).toStrictEqual({ x: -30, y: -34 });
  expect(displacement({ x: 7, y: -44 }, { x: 88, y: 105 })).toStrictEqual({ x: 81, y: 149 });
  expect(displacement({ x: 2, y: -5 }, { x: 5, y: 1 })).toStrictEqual({ x: 3, y: 6 });

  // zero displacement
  expect(displacement({ x: 84, y: 120 }, { x: 84, y: 120 })).toStrictEqual({ x: 0, y: 0 });
});
