const Sequelize = require('sequelize');
const config =  require('./config.json');

const db =  new Sequelize('mysql://'+config.user+':'+config.password+'@localhost:3306/elgrimorio' );

// add entities here
const Model = {
    sequelize: db,
    Ingredients: require('./ingredients')(db, Sequelize.DataTypes),

}


module.exports = Model;
