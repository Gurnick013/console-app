import isChecked from '../src/src/engine/isChecked.js';

describe('Test function', () => {
  test('It should be balanced', () => {
    const example1 = '[](){}';
    expect(isChecked(example1)).toBe('These parentheses are balanced');
  });

  test('It should be unbalanced', () => {
    const example2 = '[)';
    expect(isChecked(example2)).toBe('These parentheses are unbalanced');
  });
});
