import toReadLine from './engine/toReadLine.js';
import isChecked from './engine/isChecked.js';

if (process.argv.length === 2) {
  toReadLine();
} else {
  console.log(isChecked(process.argv.slice(2)[0]));
  process.exit();
}
