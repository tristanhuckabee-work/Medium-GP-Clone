'use strict';
module.exports = (sequelize, DataTypes) => {
  const Applaud = sequelize.define('Applaud', {
    userId: DataTypes.INTEGER,
    recordId: DataTypes.INTEGER
  }, {});
  Applaud.associate = function(models) {
    // associations can be defined here
  };
  return Applaud;
};