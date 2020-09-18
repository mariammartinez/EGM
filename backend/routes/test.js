const express = require('express');
const path = require('path');
const router = express.Router();

// test
/*router.get('/', (req, res) => {
   res.status(200).sendFile(path.join(__dirname + '/../views/index.html'));
});
*/

router.get('/', (req, res) => {
   res.render('index', {'title':  'El Grimorio Moderno'});
});

router.get('/pociones', (req, res) => {
   res.render('pociones', {'pociones':  'Estas son las pociones modernas'});
});

router.get('/ingredientes', (req, res) => {
   res.render('ingredientes', {'ingredientes':  'Estos son los ingredientes modernos'});
});


module.exports = router;