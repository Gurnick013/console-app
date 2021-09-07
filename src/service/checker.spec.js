import checker from './checker.js';

describe('Test function', () => {
  test('to be boolean', () => {
    const example1 = '[](){}';
    const example2 = '[){';
    expect(checker(example1).toBe(true));
    expect(checker(example2).toBe(false));
  });
});
