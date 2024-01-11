import { midpoint } from './midpoint';

describe('midpoint function', () => {
  test('two different points', () => {
    let m = midpoint({ x: -8149, y: 0.781 }, { x: 388, y: 785 });

    expect(m.x).toBeCloseTo(-3880.5);
    expect(m.y).toBeCloseTo(392.8905);
  });

  test('the same point input twice', () => {
    let m = midpoint({ x: 62, y: -38 }, { x: 62, y: -38 });

    expect(m.x).toBeCloseTo(62);
    expect(m.y).toBeCloseTo(-38);
  });
});
