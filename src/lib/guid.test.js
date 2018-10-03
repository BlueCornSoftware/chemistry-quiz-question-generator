
const guid = require('./guid');

describe('Function: guid()', () => {
  it('should return a string', () => {
    const id = guid()
    expect(typeof id).toBe('string')
  });
});