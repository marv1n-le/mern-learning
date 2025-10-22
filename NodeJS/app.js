const { createReadStream } = require('fs');

const stream = createReadStream('./content/bigfile.txt');

stream.on('data', (result) => {
  console.log(result);
})