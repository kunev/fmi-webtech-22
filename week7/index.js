const fs = require('fs');

async function readFiles() {
  let datafile1 = await fs.promises.readFile('datafile1.txt');
  let datafile2 = await fs.promises.readFile('datafile2.txt');
  console.log(datafile1, datafile2);
}

console.log(4);
readFiles();
console.log(5);
