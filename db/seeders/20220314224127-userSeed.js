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
        {
          userName: 'doodlebob',
          hashedPassword: bcrypt.hashSync('123', 10),
          bio: 'mehoymioy',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'batman',
          hashedPassword: bcrypt.hashSync('justice', 10),
          bio: 'justice',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'walterWhite',
          hashedPassword: bcrypt.hashSync('iamthedanger', 10),
          bio: 'local dealer',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'jesse',
          hashedPassword: bcrypt.hashSync('biatch', 10),
          bio: 'local dealer',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'TheRiddler',
          hashedPassword: bcrypt.hashSync('justice', 10),
          bio: 'if you are justice do not lie',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'spongebob1435',
          hashedPassword: bcrypt.hashSync('123', 10),
          bio: 'employee of the month 20 years in a row',
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
