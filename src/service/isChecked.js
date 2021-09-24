import PARENTHESES from './constatns.js';

const isChecked = (value) => {
  try {
    const filterString = value.match(/[\[\]\(\)\{\}]+/g).join('');
    let stack = [];
    for (let i = 0; i < filterString.length; i++) {
      const current = filterString[i];
      if (PARENTHESES.has(current)) {
        if (PARENTHESES.get(current) !== stack.pop()) return 'These parentheses are unbalanced';
      } else {
        stack.push(current);
      }
    }
    return !stack.length ? 'These parentheses are balanced' : 'These parentheses are unbalanced';
  } catch {
    return 'Try to enter parentheses again';
  }
};

export default isChecked;
