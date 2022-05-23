const path = require('path');
const { readdir, stat } = require('fs/promises');

const dirPath = path.resolve(__dirname, 'secret-folder');
printDirInfo(dirPath);

async function printDirInfo(dirPath) {
  console.log(`${'Filename'.padStart(30)}  |  ${'Ext'.padEnd(5)} | ${'Size'.padStart(7)}`);

  const files = await readdir(dirPath);
  files.forEach(async fileName => {
    const filePath = path.resolve(dirPath, fileName);
    const stats = await stat(filePath);
    stats.isFile() && printFileInfo(filePath, stats);
  });
}

function printFileInfo(filePath, fileStat) {
  const fileExt = path.extname(filePath).replace('.', '') || 'none';
  const filename = path.basename(filePath, '.' + fileExt);
  const fileSize = (fileStat.size / 1024).toFixed(3) + ' kb';
  console.log(`${filename.padStart(30)}  -  ${fileExt.padEnd(5)} - ${fileSize.padStart(10)}`);
}
