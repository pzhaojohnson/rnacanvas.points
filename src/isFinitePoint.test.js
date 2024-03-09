import { isFinitePoint } from './isFinitePoint';

describe('isFinitePoint function', () => {
  test('some actual finite points', () => {
    expect(isFinitePoint({ x: 0, y: 0 })).toBe(true);
    expect(isFinitePoint({ x: 3, y: 2 })).toBe(true);
    expect(isFinitePoint({ x: -19.3718, y: 83194.371 })).toBe(true);
  });

  test('some nonfinite points', () => {
    expect(isFinitePoint({ x: NaN, y: 2 })).toBe(false);
    expect(isFinitePoint({ x: Infinity, y: 2 })).toBe(false);
    expect(isFinitePoint({ x: -Infinity, y: 2 })).toBe(false);

    expect(isFinitePoint({ x: 3, y: NaN })).toBe(false);
    expect(isFinitePoint({ x: 3, y: Infinity })).toBe(false);
    expect(isFinitePoint({ x: 3, y: -Infinity })).toBe(false);
  });

  test('some objects whose x and y properties are not numbers', () => {
    expect(isFinitePoint({})).toBe(false);

    expect(isFinitePoint({ x: 5 })).toBe(false);
    expect(isFinitePoint({ y: 3 })).toBe(false);

    expect(isFinitePoint({ x: 2, y: true })).toBe(false);
    expect(isFinitePoint({ x: '6', y: 8 })).toBe(false);
  });

  test('some non-object values', () => {
    expect(isFinitePoint(2)).toBe(false);
    expect(isFinitePoint(true)).toBe(false);
    expect(isFinitePoint('asdf')).toBe(false);
    expect(isFinitePoint(null)).toBe(false);
    expect(isFinitePoint(undefined)).toBe(false);
  });
});
