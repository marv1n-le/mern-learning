const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">API Products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((products) => {
    const { id, name, image } = products;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));
  if(!singleProduct){
    return res.status(404).send('Product Not Found');
  }
  res.json(singleProduct);
});

app.get('/api/products/:id/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});