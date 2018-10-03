
const guid = require('./guid');

describe('Function: guid()', () => {
  it('should return a unique string', () => {
    const table = {};
    let u;
    [ ...Array(100) ].forEach(() => {
      u = guid();
      expect(table[u]).toBeFalsy();
      table[u] = true;
    });
  });
});
