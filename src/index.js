import readline from 'readline';
import isChecked from './service/isChecked.js';

const { log } = console;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const toReadLine = () => {
  rl.question('Enter brackets:', (answer) => {
    if (answer.toLowerCase() === 'exit') return rl.close();
    log(isChecked(answer));
    toReadLine();
  });
};

export default toReadLine;
