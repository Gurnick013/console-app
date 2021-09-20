const checker = (value) => {
  // const total = String(value) ? value : value.parentheses;
  const stack = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] === '(' || value[i] === '[' || value[i] === '{') {
      stack.push(value[i]);
    } else if (value[i] === ')' || value[i] === ']' || value[i] === '}') {
      if (stack.length) {
        let last = stack[stack.length - 1];
        if (
          (last === '[' && value[i] === ']') ||
          (last === '(' && value[i] === ')') ||
          (last === '{' && value[i] === '}') ||
          (last === '<' && value[i] === '>')
        ) {
          stack.pop();
        }
      } else return 'These brackets are unbalanced';
    }
  }
  return !stack.length ? 'These brackets are balanced' : 'These brackets are unbalanced';
};

export default checker;
