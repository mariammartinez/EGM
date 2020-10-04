

exports.getAllIngredients = (req, res, next) => { 
  
  req.model.ingredients.findAll().then( 
    (ingredients) => { 
      
      let liste = [];
      for ( let ingredient of ingredients) {
        liste.push({
          name:ingredient.name,
          description: ingredient.description
        })
      }
    
      res.render('ingredientes', {ingredients: liste})
      
      }


    );
  };
