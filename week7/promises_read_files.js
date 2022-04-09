const fsPromises = require('fs/promises');

fsPromises.readFile('datafile1.txt').then((buffer) => {
  console.log(`Read file 1: ${buffer.toString()}`);
  return fsPromises.readFile('datafile2.txt');
}, (err) => {
  console.log(`Error opening file 1: ${err}`);
}).then((buffer) => {
  // if the previous promise failed the error handler returns nothing, so
  // `buffer` would be null.
  if (buffer) { 
    console.log(`Read file 2: ${buffer.toString()}`);
  }
}, (err) => {
  console.log(`Error opening file 2: ${err}`);
})
