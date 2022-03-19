'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Records', [
        {title:'VENGEANCE',description:'I DO IT FOR GOTHAM CITY AND I BE LISTENING TO SKRILLEX',userId:'8', createdAt: new Date(), updatedAt: new Date()},
        {
          title:'mehoymiyo: im sorry',
          description:'as a past resident of bikini bottom id like to say i am sorry for how i acted.i was brought into this world on a whim and since that fateful day i have been trying to find who i am and today i am proud to announce my new debut album -mehoymiyo- out in stores now let me know how you like it down below',
          userId:7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'squidward collab ??',
          description:'no, his music is bad... soryy not sorry',
          userId:7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'top 5 best songs to fight crime',
          description:'starting off on number 5 we have IF I CANT-50 CENT,at number 4 THE DOOR-SPACE92,number 3 ME AND YOUR MAMA-CHILDISH GAMBINO, coming in at our number 2 spot is THIS NIGHT HAS OPENED MY EYES-THE SMITHS, and at our number 1 spot, we all saw this coming SOMETHING IN THE WAY-NIRVANA. -JUSTICE FOR GOTHAM, BATMAN OUT',
          userId:8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'who won?',
          description:'rick grimes vs walter white: search it up and light up the comments',
          userId:9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'CITY OF GOTHAM I REQUEST AID!!',
          description:'what cat themed songs would woo a women?? i need help asap!',
          userId:8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'whts ur favrit song genre',
          description:'myne is qoir music',
          userId:5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'SPOTIFY DOWN',
          description:'anybody else having connection issues',
          userId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'am i going crazy',
          description:'everytime i reminisce on my childhood i keep hearing music and my thoughts become black and white',
          userId:20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'RICK GRIMES WON THE EPIC RAP BATTLE OF HISTORY',
          description:'REFER TO THE TITLE',
          userId:10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'petition to have squidward play music at work',
          description:'i really like squidwards music and i would love for him to play it when we arent busy',
          userId:12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:'riddle me this',
          description:'... --- .-.. --- / . ... - --- -.-- / . -. / . ... - . / ... .. - .. --- / .-- . -... / .--. --- .-. --.- ..- . / . ... -.-. ..- -.-. .... ..-.. / --.- ..- . / -... .- - -- .- -. / . ... - .- -... .- / . -. / ..-.. .-.. .-.-.-',
          userId:11,
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Records', null, {});
  }
};
