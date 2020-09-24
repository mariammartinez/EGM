const express = require('express');
const app = express();
const path = require('path');
const hbs =  require('express-handlebars');
const { Z_PARTIAL_FLUSH } = require('zlib');

const ingredientsRoutes = require('./routes/ingredients');


//route to home
//app.use(express.static('/../frontend/public/build'));
app.use('/public', express.static(__dirname + '/public/build'));


app.get('/', (req, res  ) => {
   res.render('main', {'title': 'El Grimorio Moderno'})
});

app.engine('hbs', hbs({extname: 'hbs', 
    defaultLayout: 'index', 
    layoutDir:__dirname +'/views/layouts',
    partialDir:__dirname +'/views/partials'
}));

app.set('views',path.join(__dirname, '/views'));
app.set('view engine', 'hbs');




// on créé les routes
app.use('/', require('./routes/routes'));

app.use('/ingredients', require('./routes/ingredients'));

module.exports = app;



