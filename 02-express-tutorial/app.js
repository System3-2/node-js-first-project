const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><br><a href="/api/products">Products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const singleProduct = products.find((product) => product.id === Number(id));
  res.json(singleProduct);
});
app.listen(5000, () => {
  console.log(`app is listening on port 5000...`);
});
