const fs = require('fs');

fs.readFile('datafile1.txt', (err, buffer) => {
  if (err) {
    console.log(`Error opening file 1: ${err}`);
  } else {
    console.log(`Read file 1: ${buffer.toString()}`);
    fs.readFile('datafile2.txt', (err, buffer) => {
      if (err) {
        console.log(`Error opening file 2: ${err}`);
      } else {
        console.log(`Read file 2: ${buffer.toString()}`);
      }
    });
  }
});
