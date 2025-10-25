const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'navbar-app')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'navbar-app', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});