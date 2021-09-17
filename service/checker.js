const checker = (value) => {
  // const total = String(value) ? value : value.parentheses;
  const total = value;
  const stack = [];
  for (let i = 0; i < total.length; i++) {
    if (total[i] === '(' || total[i] === '[' || total[i] === '{') {
      stack.push(total[i]);
    } else if (total[i] === ')' || total[i] === ']' || total[i] === '}') {
      if (stack.length) {
        let last = stack[stack.length - 1];
        if (
          (last === '[' && total[i] === ']') ||
          (last === '(' && total[i] === ')') ||
          (last === '{' && total[i] === '}') ||
          (last === '<' && total[i] === '>')
        ) {
          stack.pop();
        }
      } else return false;
    }
  }
  return !stack.length ? 'These brackets are balanced' : 'These brackets are unbalanced';
};

export default checker;
