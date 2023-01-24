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
  if (!singleProduct)
    return res.status(404).send(`Product not found`)
  res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    })
  }
  if (limit) {
    return sortedProducts = sortedProducts.slice(0, limit)
  }
  if (sortedProducts.length === 0) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).send(sortedProducts);
})

