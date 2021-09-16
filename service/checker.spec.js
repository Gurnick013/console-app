import checker from './checker.js';

describe('Test function', () => {
  test('It should be balanced', () => {
    const example1 = '[](){}';
    expect(checker(example1)).toBe('These brackets are balanced');
  });

  test('It should be unbalanced', () => {
    const example2 = '[)';
    expect(checker(example2)).toBe('These brackets are unbalanced');
  });
});
