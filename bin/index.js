#! /usr/bin/env node

import readline from 'readline';
import checker from '../service/checker.js';

const { log } = console;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const asyncReadLine = () => {
  if (process.argv.slice(2).length > 1) {
    log('You passed multiple parameters (You have to pass only one)');
  } else if (process.argv.slice(2).length === 1) {
    log(checker(process.argv.slice(2)[0]));
  } else {
    rl.question('Enter brackets:', (answer) => {
      if (answer.toLowerCase() === 'exit') return rl.close();
      log(checker(answer));

      asyncReadLine();
    });
  }
};

asyncReadLine();
