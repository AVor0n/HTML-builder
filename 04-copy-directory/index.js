const { rm, mkdir, readdir, copyFile, stat } = require('fs/promises');
const path = require('path');

copyDir(path.resolve(__dirname, 'files'), path.resolve(__dirname, 'files-copy'));

async function copyDir(src, dest) {
  await rm(dest, { recursive: true, force: true });
  await mkdir(dest);

  const files = await readdir(src);
  files.forEach(async fileName => {
    const fileCopyPath = path.resolve(dest, fileName);
    const filePath = path.resolve(src, fileName);

    const stats = await stat(filePath);
    if (stats.isFile()) {
      await copyFile(filePath, fileCopyPath);
    } else {
      await mkdir(fileCopyPath, { recursive: true });
      await copyDir(filePath, fileCopyPath);
    }
  });
}
