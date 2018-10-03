'use strict';
const testData = require('./testData');
const wrongChoiceGenerator = require('./wrongChoiceGenerator');

describe('wrongChoiceGenerator', () => {
  it(
    `takes an element and a reference
     to all other elements and returns
     three other element options`, () => {
    const { elements } = testData.fetch();
    const hydrogen = elements[0];

    const alreadyUsed = [
      elements[40],
      elements[41],
      elements[42],
    ];

    const options = wrongChoiceGenerator(
      hydrogen,
      elements,
      alreadyUsed,
      3
    );

    expect(options.length).toBe(3);
    expect(options[0].name).not.toBe(hydrogen.name);
    expect(options[1].name).not.toBe(hydrogen.name);
    expect(options[2].name).not.toBe(hydrogen.name);

  });
});

