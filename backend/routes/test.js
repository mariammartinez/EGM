const express = require('express');
const router = express.Router();
const path = require('path');
const app = require('../app');


//route to home
router.use(express.static('view'));

router.get('/', (req, res  ) => {
   res.render('main', {'title': 'El Grimorio Moderno'})
});


//get

//get pociones page

/*router.get('/pociones', (req, res) => {
   res.render('pociones', {'pociones':  'Estas son las pociones modernas'});
});*/

//get ingredientes page

router.get('/ingredientes', (req, res) => {
   res.render('ingredientes');
});


module.exports = router;