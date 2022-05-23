const path = require('path');
const fs = require('fs');
const { stdout } = require('process');

const filename = 'text.txt';

console.log(`\x1b[34mFile ${filename}:\x1b[0m`); //Установка синего цвета, вывод имени файла и сброс цвета
const stream = fs.createReadStream(path.resolve(__dirname, filename));
stream.pipe(stdout);