const Sequelize = require('sequelize');
const config =  require('./config.json');

const db =  new Sequelize('mysql://'+config.user+':'+config.password+'@localhost:3306/elgrimorio' );

// add entities here
const Model = {
    sequelize: db,
    ingredients: require('./ingredients')(db, Sequelize.DataTypes),
    recipes: require('./recipes')(db, Sequelize.DataTypes),
    mix: require('./mix')(db, Sequelize.DataTypes)
}


Model.mix.belongsTo(Model.recipes, {
    foreignKey: 'recipe_id'
})
Model.recipes.hasMany(Model.mix,{
    foreignKey: 'recipe_id',
})

Model.mix.belongsTo(Model.ingredients, {
    foreignKey: 'ingredient_id'
})
Model.ingredients.hasMany(Model.mix,{
    foreignKey: 'ingredient_id',
})

module.exports = Model;
