'use strict';

const testData = require('./testData');

describe('testData', () => {
  it('should load test data', () => {
    const data = testData.fetch();
    expect(data.elements[0].name).toBe('Hydrogen');
  });

  describe('the .random method', () => {
    it('should give x unique elements', () => {
      const elements = testData.random(2);

      expect(elements[0].name).not.toBe(elements[1].name);
    });
  });
});