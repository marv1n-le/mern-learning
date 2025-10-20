const { read } = require('fs');

const { readFile, writeFile } = require('fs').promises;

// const start = async () => {
//   try {
//     const first = await readFile('./content/first.txt', 'utf8');
//     const second = await readFile('./content/second.txt', 'utf8');
//     await writeFile(
//       './content/result-mind-grenade.txt',
//       `Here is the result: ${first}, ${second}`,
//       { flag: 'a' }
//     );
//     console.log('File written successfully');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// start();


const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-mind-grenade.txt',
      `Here is the result: ${first}, ${second}`,
      { flag: 'a' }
    );
    console.log('File written successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

start();