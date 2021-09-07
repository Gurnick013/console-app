import readline from 'readline';
import checker from './service/checker.js';

const { log } = console;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter brackets:', (answer) => {

  checker(answer) ? log(`These brackets are balanced`) : log(`These brackets are unbalanced`);

  rl.close();
});
