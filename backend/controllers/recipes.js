

exports.getAllRecipes = (req, res, next) => { 
    req.model.recipes.findAll(        {
      include : [{
        model: req.model.mix,
        include: [req.model.ingredients]
      } ] 
    }).then( 
      (recipes) => { 
        let lista = [];
        for ( let recette of recipes) {

          let data = {
            id: recette.id,
            name:recette.name,
            text: recette.text,
            image: recette.image,
            ingredients: []
          };

          for (let mix of recette.mixes){
            data.ingredients.push({
              name: mix.ingredient.name,
            });
          }

          lista.push(data)
        }
        console.log(lista);
        res.render('recipes', {
          recipes: lista,
          title: "Pociones",
          activeMenu: 'recipe'
        })
      }  
      );
    };
exports.getOneRecipe = (req, res, next) => {
    req.model.recipes.findOne({
      where: {id: req.params.id },  
      include : [{
        model: req.model.mix,
        include: [req.model.ingredients]
      }]
    })
    .then(recipe =>{

      let data = {
        name:recipe.name,
        text: recipe.text,
        image: recipe.image,
        ingredients: []
      };

      for (let mix of recipe.mixes){
        data.ingredients.push({
          name: mix.ingredient.name,
        });
      }

      res.render('recipe', {
        recipe: data,
        title: "Pocion",
        activeMenu: 'recipe'
      })
    }) 

   

}