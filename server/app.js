const express = require('express');
const morgan = require('morgan');
const app = express();
const storeRoute = require('./routes/storageController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', storeRoute);

module.exports = app;