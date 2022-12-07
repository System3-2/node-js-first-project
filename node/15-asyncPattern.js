const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    // res.end('home page');
   
  }
  if(req.url === '/about'){
    res.end('about page');
  }
  res.end('error page')
  console.log('error page');
})
server.listen(4000,() => {
  console.log('Server is on port: 4000');
})