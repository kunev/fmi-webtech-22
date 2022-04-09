const fs = require('fs');

async function readFiles() {
  try {
    let datafile1 = await fs.promises.readFile('datafile.txt');
    let datafile2 = await fs.promises.readFile('datafile2.txt');
    console.log(datafile1, datafile2);
  } catch (err) {
    console.log(`Error opening file 1: ${err}`);
  }
}

console.log(4);
readFiles();
console.log(5);

