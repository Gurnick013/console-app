const checker = (value) => {
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === '(' || value[i] === '[' || value[i] === '{') count++;
    if (value[i] === ')' || value[i] === ']' || value[i] === '}') count--;
  }
  return !count ? true : false;
};

export default checker;
