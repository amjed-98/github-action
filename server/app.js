const express = require('express');
const { join } = require('path');
const compression = require('compression');

const router = require('./routes/index');
const { clientErr, serverErr } = require('./controllers/error');

const app = express();

app.disabled('x-powered-by');
app.use(compression());
app.set('port', process.env.PORT || 5070);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use(clientErr);
app.use(serverErr);

module.exports = app;
