'use strict';

const randomUniqueElements = require('./randomUniqueElements');

describe('Function: randomUniqueElements', () => {
  it('should return an empty array if given an empty array', () => {
    const elements = randomUniqueElements([], 0);
    expect(elements.length).toBe(0);
  });
  it('defaults to returning an array of the same length', () => {
    const elements = randomUniqueElements([1,2,3]);
    expect(elements.length).toBe(3);
  });
});
