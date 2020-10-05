const express = require('express');
const app = express();
const path = require('path');
const exphbs =  require('express-handlebars');
const { Z_PARTIAL_FLUSH } = require('zlib');
const model = require('./models/index');

const ingredientsRoutes = require('./routes/ingredients');


//route to home
//app.use(express.static('/../frontend/public/build'));
app.use('/public', express.static(__dirname + '/../frontend/public/build'));

var hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'index',
    layoutDir:__dirname +'/views/layouts',
    partialDir:__dirname +'/views/partials',
    helpers: require('./helpers/handlebarshelpers').helpers
});
app.engine('hbs', hbs.engine);

app.set('views',path.join(__dirname, '/views'));
app.set('view engine', 'hbs');


app.use(function( req, res, next) {
    req.model = model;
    next();
});

// on créé les routes
//app.use('/', require('./routes/routes'));

app.get('/', (req, res  ) => {
    res.render('main', {'title': "Le fournil d'Arthur" })
 });
app.use('/ingredientes', require('./routes/ingredients'));
app.use('/recipes', require('./routes/recipes'));

module.exports = app;



