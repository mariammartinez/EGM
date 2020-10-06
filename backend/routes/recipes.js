const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipes')

router.get('/', recipeCtrl.getAllRecipes);
router.get('/:id/show', recipeCtrl.getOneRecipe);



module.exports = router;