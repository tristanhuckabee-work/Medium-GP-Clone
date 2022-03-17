'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Comments', [
        {description:'Great story love to hear it! Poggers', userId:2, recordId:4, createdAt: new Date(), updatedAt: new Date()},
        {description:'Another Banger', userId:1, recordId:4, createdAt: new Date(), updatedAt: new Date()},
        {description:'L opinion + ratio + did not ask', userId:3, recordId:4, createdAt: new Date(), updatedAt: new Date()},
        {description:'W + YBN better + lebron pwns', userId:1, recordId:4, createdAt: new Date(), updatedAt: new Date()},

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
