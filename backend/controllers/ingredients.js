

exports.getAllIngredients = (req, res, next) => { 
  
  req.model.Ingredients.findAll().then(
      (ingredients) => {  
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
