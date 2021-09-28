#! /usr/bin/env node

import toReadLine from '../src/index.js';
import isChecked from '../src/service/isChecked.js';

if (process.argv.length === 2) {
  toReadLine();
} else {
  console.log(isChecked(process.argv.slice(2)[0]));
  process.exit();
}
