const readline = require('readline');
const checker = require('./service/checker.js');

const { log } = console;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const asyncReadLine = () => {
  rl.question('Enter brackets:', (answer) => {
    if (answer === 'exit') return rl.close();
    checker(answer) ? log(`These brackets are balanced`) : log(`These brackets are unbalanced`);
    asyncReadLine();
  });
};

asyncReadLine();
