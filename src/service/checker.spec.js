const checker = require('./checker.js');

describe('Test function', () => {
  test('to be true', () => {
    const example1 = '[](){}';
    expect(checker(example1)).toBe(true);
  });

  test('to be false', () => {
    const example2 = '[)';
    expect(checker(example2)).toBe(false);
  });
});
