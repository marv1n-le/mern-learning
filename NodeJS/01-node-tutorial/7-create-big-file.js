const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
  writeFileSync('bigfile.txt', `Hello World ${i}\n`, { flag: 'a' });
}