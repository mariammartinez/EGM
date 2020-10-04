const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    let recipes = sequelize.define('recipe', {
        name:{type: DataTypes.STRING},
        text: {type: DataTypes.STRING},
        image:{type:DataTypes.STRING}
      }

  , 
    {
      timestamps: false,
      tableName: 'recipe'
  });

  return recipes; 
};

