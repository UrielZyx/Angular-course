const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.json());

const authController = require('./controllers/authController');
const productsController = require('./controllers/productsController');

app.use('/api/auth', authController);
app.use('/api/products', productsController);

app.listen(8000)