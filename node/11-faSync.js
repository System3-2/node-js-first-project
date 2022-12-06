const { readFileSync,writeFileSync } = require('fs');

const first = readFileSync('./content/generic/first.txt','utf-8');
const second = readFileSync('./content/generic/text.txt','utf-8');

const third = writeFileSync('./content/generic/sync.txt', `Here is the result`);
console.log(third);
