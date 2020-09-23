const express = require('express');
const app = express();
const path = require('path');
const hbs =  require('express-handlebars');
const { Z_PARTIAL_FLUSH } = require('zlib');



app.engine('hbs', hbs({extname: 'hbs', 
    defaultLayout: 'index', 
    layoutDir:__dirname +'/views/layouts',
    partialDir:__dirname +'/views/partials'
}));

app.set('views',path.join(__dirname, '/views'));
app.set('view engine', 'hbs');




// on créé les routes
app.use('/', require('./routes/test'));

module.exports = app;
