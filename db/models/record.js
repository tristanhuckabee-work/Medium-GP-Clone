'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Record.associate = function (models) {
    // associations can be defined here
    Record.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Record;
};