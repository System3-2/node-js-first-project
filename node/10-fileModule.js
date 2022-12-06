const path = require('path');

// console.log(path.sef);

const filePath = path.join('/content','generic','text.txt');
// console.log(filePath);

const base = path.basename(filePath);
// console.log(base);

const absolute = path.resolve(__dirname,'content','generic','text.txt');
console.log(absolute);