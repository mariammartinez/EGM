

exports.getAllRecipes = (req, res, next) => { 
  
    req.model.recipes.findAll(        {
      include : [{
        model: req.model.mix,
        include: [req.model.ingredients]
      } ] 
    }).then( 
      (recipes) => {  
        //console.log(recipes);

        let lista = [];
        for ( let recette of recipes) {

          let data = {
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
  