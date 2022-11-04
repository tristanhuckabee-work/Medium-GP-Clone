'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkInsert(options, [
      { description: 'Great story love to hear it! Poggers', userId: 2, recordId: 3, createdAt: new Date(), updatedAt: new Date() },
      { description: 'Another Banger', userId: 1, recordId: 2, createdAt: new Date(), updatedAt: new Date() },
      { description: 'L opinion + ratio + did not ask', userId: 3, recordId: 10, createdAt: new Date(), updatedAt: new Date() },
      { description: 'W + YBN better + lebron pwns', userId: 1, recordId: 13, createdAt: new Date(), updatedAt: new Date() },
      { description: 'ur trash kid', userId: 12, recordId: 2, createdAt: new Date(), updatedAt: new Date() },
      { description: 'redemption arc??', userId: 20, recordId: 2, createdAt: new Date(), updatedAt: new Date() },
      { description: 'I LOST SOMETHING ONCE...', userId: 12, recordId: 14, createdAt: new Date(), updatedAt: new Date() },
      { description: 'If I could Ratio you, I would', userId: 1, recordId: 10, createdAt: new Date(), updatedAt: new Date() },
      { description: 'RICK GRIMES SOLOS', userId: 14, recordId: 5, createdAt: new Date(), updatedAt: new Date() },
      { description: 'XXXTENTACION IS WRONG! WALTER HAS BEEN RUNNING THINGS, HIS EPIC RAPPER BATTLE WAS LIT', userId: 13, recordId: 5, createdAt: new Date(), updatedAt: new Date() },
      { description: 'Riddle me this Batman! What is horrible and lame, YOUR MUSIC TASTE', userId: 11, recordId: 1, createdAt: new Date(), updatedAt: new Date() },
      { description: 'My favorite genre is Ludacris', userId: 21, recordId: 7, createdAt: new Date(), updatedAt: new Date() },
      { description: 'I listen to skrillex too! I love you Batman!!', userId: 17, recordId: 1, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkDelete(options);
  }
};
