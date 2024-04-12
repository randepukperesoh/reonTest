const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors())
app.use(bodyParser.json());

const messageRoutes = require('./routes/routes');

app.use('/', messageRoutes);

app.listen(3000, () => {
  console.log('API is running on port 3000');
});
