const { readFile,writeFile } = require('fs');

read = readFile('./content/sync.txt','utf-8', (err,result) => {
  if(err){
    return;
  }
  const first = result;
  readFile('./content/sync.txt','utf-8', (err,result) => {
    if(err){
      console.log(err);
    }
    const second = result;
    writeFile('./content/no.txt','No sync file',)
  })
})