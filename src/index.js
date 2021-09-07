const { log } = console;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter brackets:', (answer) => {
    
  const BRACKETS = ['[', ']', '{ ', '}', '(', ')'];



  console.log(`This string is disbalans`);

  rl.close();
});
