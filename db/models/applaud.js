'use strict';
module.exports = (sequelize, DataTypes) => {
  const Applaud = sequelize.define('Applaud', {
    userId: DataTypes.INTEGER,
    recordId: DataTypes.INTEGER
  }, {});
  Applaud.associate = function (models) {
    // associations can be defined here
    Applaud.belongsTo(models.User, { foreignKey: 'userId' });
    Applaud.belongsTo(models.Record, { foreignKey: 'recordId' });
  };
  return Applaud;
};