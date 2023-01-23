const http = require("http");
const PORT = 5000;
const { readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImg = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    res.write(homeImg);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javascript",
    });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write(`<h1>Page not found</h1>`);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});


const express = require("express");
const app = express();


app.get("/", (req, res) => {
  console.log(`user hit the resource`);
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page okay");
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Resource not found</h1>`);
});


app.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.listen
