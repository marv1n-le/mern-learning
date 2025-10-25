const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

//only apply to /api
// app.use([logger, authorize]);
app.use(express.static('./public'));                            

app.get('/', (req, res) => {
res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});