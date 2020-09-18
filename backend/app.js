const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// on créé les routes
app.use('/', require('./routes/test'));

module.exports = app;
