const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const people = require('./routes/people');
const auth = require('./routes/auth');

//only apply to /api
// app.use([logger, authorize]);
app.use(express.static('./public'));                            
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/people', people);
app.use('/login', auth);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});