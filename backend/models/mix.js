const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    let mix = sequelize.define('mix', {
   
  }, 
    {
      timestamps: false,
      tableName: 'mix'
  });

  return mix; 
};

