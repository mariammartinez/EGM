const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    let ingredients = sequelize.define('ingredients', {
        name:{type: DataTypes.STRING},
        description: {type: DataTypes.STRING}
  }, 
    {
      timestamps: false,
      tableName: 'ingredients'
  });

  return ingredients; 
};

