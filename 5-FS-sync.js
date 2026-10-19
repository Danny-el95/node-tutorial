const { readFileSync, writeFileSync } = require('fs');
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/Second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here are the results: ${first}, ${second}`, { flag: 'a' }
);
console.log('Done with the task')
console.log('Starting the next task')