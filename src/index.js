import readline from 'readline';
import isChecked from './service/isChecked.js';

const { log } = console;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.argv.length === 2) {
  const toReadLine = () => {
    rl.question('Enter brackets:', (answer) => {
      if (answer.toLowerCase() === 'exit') return rl.close();
      log(isChecked(answer));
      toReadLine();
    });
  };
  toReadLine();
} else {
  log(isChecked(process.argv.slice(2)[0]));
  process.exit();
}
