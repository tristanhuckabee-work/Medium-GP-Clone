'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          userName: 'John Doe',
          hashedPassword: bcrypt.hashSync('123', 10),
          bio: null,
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'polkadot-stingray',
          hashedPassword: bcrypt.hashSync('123', 10),
          bio: null,
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'xX_metalover_Xx',
          hashedPassword: bcrypt.hashSync('123', 10),
          bio: null,
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'simpin-aint-EZ',
          hashedPassword: bcrypt.hashSync('123', 10),
          bio: null,
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'hotbox420',
          hashedPassword: bcrypt.hashSync('123', 10),
          bio: null,
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'fiddlersGreen',
          hashedPassword: bcrypt.hashSync('123', 10),
          bio: null,
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
