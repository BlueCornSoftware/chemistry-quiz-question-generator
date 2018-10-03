import randomUniqueElements from './randomUniqueElements';

describe('Function: randomUniqueElements', () => {
  it('should return an empty array if given an empty array', () => {
    const elements = randomUniqueElements([], 0);
    expect(elements.length).toBe(0);
  });
});
