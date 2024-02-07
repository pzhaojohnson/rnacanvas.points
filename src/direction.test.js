import { direction } from './direction';

describe('direction function', () => {
  test('some points that are far away from each other', () => {
    for (let i = 0; i < 50; i++) {
      let fromPoint = {
        x: (100 * Math.random()) - 50,
        y: (100 * Math.random()) - 50,
      };

      let d = (5 * Math.random()) + 5;
      expect(d).toBeGreaterThanOrEqual(5);

      let a = (2 * Math.PI) * Math.random();

      // to keep the angle in the same range as that returned by the direction function
      if (a > Math.PI) {
        a -= (2 * Math.PI);
      }

      let toPoint = {
        x: fromPoint.x + (d * Math.cos(a)),
        y: fromPoint.y + (d * Math.sin(a)),
      };

      expect(direction(fromPoint, toPoint)).toBeCloseTo(a);
    }
  });

  test('some points that are very close to each other', () => {
    for (let i = 0; i < 50; i++) {
      let fromPoint = {
        x: (100 * Math.random()) - 50,
        y: (100 * Math.random()) - 50,
      };

      let d = 1e-6;
      let a = (2 * Math.PI) * Math.random();

      // to keep the angle in the same range as that returned by the direction function
      if (a > Math.PI) {
        a -= (2 * Math.PI);
      }

      let toPoint = {
        x: fromPoint.x + (d * Math.cos(a)),
        y: fromPoint.y + (d * Math.sin(a)),
      };

      expect(direction(fromPoint, toPoint)).toBeCloseTo(a);
    }
  });

  it('returns a finite number when the two points are exactly the same', () => {
    let a = direction({ x: 2, y: 3 }, { x: 2, y: 3 });

    expect(Number.isFinite(a)).toBeTruthy();
  });
});
