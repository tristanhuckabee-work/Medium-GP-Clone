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
    User.belongsToMany(models.User, {
      through: 'Follow',
      otherKey: 'userId',
      foreignKey: 'followerId',
      as: 'followings'
    });
    User.belongsToMany(models.User, {
      through: 'Follow',
      otherKey: 'followerId',
      foreignKey: 'userId',
      as: 'followers'
    });
    User.hasMany(models.Applaud, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });
  };
  return User;
};
// This should get all of the users following the user whose userId you pass in
// const user = await User.findByPk(userId, {
//     include: [{
//         model: User,
//         as: 'followers'
//     }]
// }
// This should get all users that the user with an id of userId is following
// const user = await User.findByPk(userId, {
//     include: [{
//         model: User,
//         as: 'followings'
//     }]
// }
// Both queries result in a User object with a nested array of relevant users.