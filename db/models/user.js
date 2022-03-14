'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    bio: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Record, { foreignKey: 'userId' });
  };
  return User;
};