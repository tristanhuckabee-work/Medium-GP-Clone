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
    Record.hasMany(models.Applaud, { foreignKey: 'recordId', onDelete: 'CASCADE', hooks: true });
    Record.hasMany(models.Comment, { foreignKey: 'recordId', onDelete: 'CASCADE', hooks: true });
  };
  return Record;
};