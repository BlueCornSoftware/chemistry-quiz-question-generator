import guid from './guid';

describe('Function: guid()', () => {
  it('should return a unique string', () => {
    const table = {};
    let u;
    [ ...Array(1000) ].forEach(() => {
      u = guid();
      expect(table[u]).toBeFalsy();
      table[u] = true;
    });
  });
});
