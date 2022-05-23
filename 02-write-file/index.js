const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const fs = require('fs');
const path = require('path');

const filename = 'text.txt';

const fileStream = fs.createWriteStream(path.resolve(__dirname, filename));
const rl = readline.createInterface({ input, output });

console.log('\x1b[36mHello, write something:\x1b[0m');

rl.on('line', (input) => {
  input === 'exit' && rl.close();
  fileStream.write(input + '\n');
});

rl.on('close', () => {
  //Goodbye message
  console.log(
    `%c\n\x1b[1m\u0020\u0020\u0020\u0020GOODBYE\n\x1b[33m\u2572\u2572\x1b[31m\u256d\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u256e\x1b[33m\u2571\u2571\n\x1b[33m\u2572\u2572\x1b[31m\u2503\x1b[36m\u256d\u2501\u2501\u256e\x1b[31m\u250a\x1b[36m\u256d\u2501\u2501\u256e\x1b[31m\u2503\x1b[33m\u2571\u2571\n\x1b[33m\u2572\u2572\x1b[31m\u2503\x1b[36m\u2503\x1b[32m\u250a\u250a\x1b[36m\u2503\x1b[31m\u250a\x1b[36m\u2503\x1b[32m\u250a\u250a\x1b[36m\u2503\x1b[31m\u2503\x1b[33m\u2571\u2571\n\x1b[33m\u2572\u2572\x1b[31m\u2503\x1b[36m\u2570\u2501\u2501\u256f\x1b[31m\u25b2\x1b[36m\u2570\u2501\u2501\u256f\x1b[31m\u2503\x1b[33m\u2571\u2571\n\x1b[32m\u256d\u256e\x1b[31m\u2570\u2533\u2533\u2533\u2533\u2533\u2533\u2533\u2533\u2533\u256f\x1b[32m\u256d\u256e\n\x1b[32m\u2570\u2570\x1b[35m\u2501\u253b\u253b\u253b\u253b\u253b\u253b\u253b\u253b\u253b\u2501\x1b[32m\u256f\u256f\n\x1b[32m\u256d\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\u256e\n\x1b[32m\u2570\u256f\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u2570\u256f\x1b[0m`,
    'font-family: monospace'
  );
});