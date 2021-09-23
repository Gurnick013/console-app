import PARENTHESES from './constatns';

const isChecked = (value) => {
  if (!value) return 'Try enter parentheses again';

  const filterString = value.match(/[\[\]\(\)\{\}]+/g).join('');

  const openParentheses = PARENTHESES.keys();  

  let stack = [];

  for (let i = 0; i < filterString.length; i++) {
    const current = filterString[i];
    if (!PARENTHESES.has(current)) {
      if (PARENTHESES.get(current) !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }

  return !stack.length ? 'These parentheses are balanced' : 'These parentheses are unbalanced';
};

export default isChecked;
