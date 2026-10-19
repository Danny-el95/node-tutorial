const path = require('path');
console.log(path.sep)

const filePath = path.join('./Content', 'subcontent', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname, 'Content', 'subcontent', 'text.txt');
console.log(absolute);

const resolve = path.resolve(__filename, 'Content', 'subcontent', 'text.txt');
console.log(resolve);