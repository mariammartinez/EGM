const express = require('express');
const router = express.Router();
const path = require('path');
const app = require('../app');



//get pociones page

router.get('/pociones', (req, res) => {
   res.render('pociones', {'pociones':  'Estas son las pociones modernas'});
});

//get ingredientes page

router.get('/ingredientes', (req, res) => {
   res.render('ingredientes', {'ingredientes': 'Estos son los ingredientes magicos'});
});


module.exports = router;