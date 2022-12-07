const { writeFileSync } = require('fs');

for(let i = 0; i< 10000; i++){
  writeFileSync('./content/generic/big.txt',`hello world ${i}`,{ flag: 'a'});
}