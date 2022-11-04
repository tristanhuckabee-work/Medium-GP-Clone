'use strict';
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        userName: 'John Doe',
        hashedPassword: bcrypt.hashSync('123', 10),
        bio: "My tastes in music are a little quirky, a little out there, I'm not like the other boys!!! 😘💽🎶",
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
        userName: 'iloveqoir',
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
      },
      {
        userName: 'Kanye West',
        hashedPassword: bcrypt.hashSync('sketeDavidson', 10),
        bio: "Skete Davidson IS WITH MY WIFE!! RIP CHANCE THE RAPPER, HE AINT DEAD BUT HIS MUSIC IS!",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'XXXTentacion',
        hashedPassword: bcrypt.hashSync('moonlight00', 10),
        bio: "SPOTLIGH OOO MOONLIGHT OOOO",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Tyler the Creator',
        hashedPassword: bcrypt.hashSync('24681012', 10),
        bio: 'I love nintendo! Especially the switch and I love nintendo     music!',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'LilMuzzle',
        hashedPassword: bcrypt.hashSync('buddyTheD0g8080', 10),
        bio: "I love Dogs",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'BEEPBOOPBEEP',
        hashedPassword: bcrypt.hashSync('182A#,ai!', 10),
        bio: "I like league!",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'NapoleanDynamite12',
        hashedPassword: bcrypt.hashSync('uGhidiot!9', 10),
        bio: 'TINA YOU FAT LARD COME GET SOME DINNER',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'SetoKaiba',
        hashedPassword: bcrypt.hashSync('#ih8Yugi', 10),
        bio: 'blue eyes is op Yugi is just a CHEATER',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'uzumakinaruto',
        hashedPassword: bcrypt.hashSync('YOUkn0wIt!', 10),
        bio: 'I will become Hokage no matter WHAT!!!',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'PaulWalker',
        hashedPassword: bcrypt.hashSync('si1verR34*', 10),
        bio: 'Dude I almost had you',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'OGLink',
        hashedPassword: bcrypt.hashSync('M@st3rsw0rd', 10),
        bio: '*silence*',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkDelete(options);
  }
};
