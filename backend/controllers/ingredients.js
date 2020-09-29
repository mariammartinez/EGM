

exports.getAllIngredients = (req, res, next) => { 
  
  req.model.Ingredients.findAll().then( 
    (ingredients) => {  console.log(ingredients);
      
      let liste = [];
      for ( let ingredient of ingredients) {
        liste.push({
          name:ingredient.name,
          description: ingredient.description
        })
      }
      console.log(liste);
      res.render('ingredientes', {ingredients: liste})
      
      
      }


    );
  };
