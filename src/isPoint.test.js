import { isPoint } from './isPoint';

describe('isPoint function', () => {
  test('some actual points', () => {
    expect(isPoint({ x: 0, y: 0 })).toBe(true);
    expect(isPoint({ x: 5, y: 10 })).toBe(true);
    expect(isPoint({ x: -10.57, y: 0.03149 })).toBe(true);

    // X and Y coordinates don't need to be finite
    expect(isPoint({ x: NaN, y: Infinity })).toBe(true);
  });

  test('objects whose x and y properties are not numbers', () => {
    expect(isPoint({})).toBe(false);

    expect(isPoint({ x: 2 })).toBe(false);
    expect(isPoint({ y: 5 })).toBe(false);

    expect(isPoint({ x: 2, y: 'asdf' })).toBe(false);
    expect(isPoint({ x: true, y: 3 })).toBe(false);
  });

  test('some non-object values', () => {
    expect(isPoint('asdf')).toBe(false);
    expect(isPoint(2)).toBe(false);
    expect(isPoint(true)).toBe(false);
    expect(isPoint(undefined)).toBe(false);
  });

  test('a value of null', () => {
    expect(isPoint(null)).toBe(false);
  });
});
