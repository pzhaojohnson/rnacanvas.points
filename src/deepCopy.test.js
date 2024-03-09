import { deepCopy } from './deepCopy';

describe('deepCopy function', () => {
  it('returns a new point', () => {
    let p1 = { x: 0, y: 0 };
    let p2 = deepCopy(p1);

    expect(p2).not.toBe(p1);
  });

  it('copies X and Y coordinates correctly', () => {
    let p1 = { x: 41.247128, y: 9.3718684 };
    let p2 = deepCopy(p1);

    expect(p2).toStrictEqual({ x: 41.247128, y: 9.3718684 });
  });
});
