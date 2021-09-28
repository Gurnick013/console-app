import PARENTHESES from './constants/constatns.js';

const isChecked = (value) => {
  const filterString = value.match(/[\[\]\(\)\{\}]+/g);
  if (!filterString) return 'Try to enter parentheses again';
  let stack = [];
  const arrayParentheses = filterString.join('');
  for (let i = 0; i < arrayParentheses.length; i++) {
    const current = arrayParentheses[i];
    if (PARENTHESES.has(current)) {
      if (PARENTHESES.get(current) !== stack.pop()) return 'These parentheses are unbalanced';
    } else {
      stack.push(current);
    }
  }
  return !stack.length ? 'These parentheses are balanced' : 'These parentheses are unbalanced';
};

export default isChecked;
