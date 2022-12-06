const { write } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our muyiwa");
  }
  if (req.url === "/about") {
    res.end("Here is our history");
  }
 else{
  res.end(`<h1>oops!</h1>
  <p>We can find the page</p>`);
 }
});

server.listen(5000);
