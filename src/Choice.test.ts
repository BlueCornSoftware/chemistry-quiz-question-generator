import Choice from './Choice';

describe('A Choice', () => {
  const value = 3;
  const choice = Choice({ value });
  it('has an id', () => {
    expect(typeof choice.id).toBe('string');
  });
  it('has a value prop', () => {
    expect(choice.value).toBe(value);
  });
});