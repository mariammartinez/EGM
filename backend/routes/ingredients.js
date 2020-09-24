const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients')

router.get('/', ingredientsCtrl.getAllIngredients);



module.exports = router;