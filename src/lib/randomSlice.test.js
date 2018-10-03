'use strict';

const randomSlice = require('./randomSlice');

describe('Function: randomSlice', () => {
  it('should return an array of proper length when length specified', () => {
    const length = 2;
    const result = randomSlice([1,2,3,4,5,6], length);
    expect(result.length).toBe(length);
  });
  it('should return an array of either the same size or smaller size', () => {
    const arr = [1,2,3,4,5,6,7,8,9];
    const result = randomSlice(arr);
    expect(result.length).toBeLessThanOrEqual(arr.length);
  });
});
