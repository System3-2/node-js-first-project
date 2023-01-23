const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><br><a href="/api/products">Products</a>`);
});

app.get('/api/products', (req, res) => {
  
});

app.listen(5000, () => {
  console.log(`app is listening on port 5000...`);
});
