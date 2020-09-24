const Ingredients = require('../models/ingredients');


exports.getAllIngredients = (req, res, next) => { 
    Ingredients.find().then(
      (things) => {  
        res.status(200).json(ingredients);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
