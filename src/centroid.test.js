import { centroid } from './centroid';

describe('centroid function', () => {
  test('zero points', () => {
    let c = centroid([]);

    expect(c.x).toBeNaN();
    expect(c.y).toBeNaN();
  });

  test('one point', () => {
    let c = centroid([
      { x: 1266, y: -883 },
    ]);

    expect(c.x).toBeCloseTo(1266);
    expect(c.y).toBeCloseTo(-883);
  });

  test('six points', () => {
    let c = centroid([
      { x: 66, y: 0.28 },
      { x: 7.835, y: -1298 },
      { x: -110, y: 304 },
      { x: 56, y: 0.118 },
      { x: -55, y: -3 },
      { x: 10392, y: -9147 },
    ]);

    expect(c.x).toBeCloseTo(1726.1391666666666);
    expect(c.y).toBeCloseTo(-1690.6003333333335);
  });
});
