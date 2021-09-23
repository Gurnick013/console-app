import readline from 'readline';
import checker from './service/checker.js';

const { log } = console;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.argv.length === 2) {
  const asyncReadLine = () => {
    rl.question('Enter brackets:', (answer) => {
      if (answer.toLowerCase() === 'exit') return rl.close();
      log(isChecked(answer));
      asyncReadLine();
    });
  };
  asyncReadLine();
} else {
  log(isChecked(process.argv.slice(2)[0]));
}
