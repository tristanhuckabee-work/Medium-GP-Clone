'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Records', [
      { title: 'VENGEANCE', description: 'I DO IT FOR GOTHAM CITY AND I BE LISTENING TO SKRILLEX', userId: '8', createdAt: new Date(), updatedAt: new Date() },
      {
        title: 'mehoymiyo: im sorry',
        description: 'as a past resident of bikini bottom id like to say i am sorry for how i acted.i was brought into this world on a whim and since that fateful day i have been trying to find who i am and today i am proud to announce my new debut album -mehoymiyo- out in stores now let me know how you like it down below',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'squidward collab ??',
        description: 'no, his music is bad... soryy not sorry',
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'top 5 best songs to fight crime',
        description: 'starting off on number 5 we have IF I CANT-50 CENT,at number 4 THE DOOR-SPACE92,number 3 ME AND YOUR MAMA-CHILDISH GAMBINO, coming in at our number 2 spot is THIS NIGHT HAS OPENED MY EYES-THE SMITHS, and at our number 1 spot, we all saw this coming SOMETHING IN THE WAY-NIRVANA. -JUSTICE FOR GOTHAM, BATMAN OUT',
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'who won? Epic Rap Battles',
        description: 'rick grimes vs walter white: search it up and light up the comments',
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'CITY OF GOTHAM I REQUEST AID!!',
        description: 'what cat themed songs would woo a women?? i need help asap!',
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'whts ur favrit song genre',
        description: 'myne is qoir music',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'SPOTIFY DOWN',
        description: 'anybody else having connection issues',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'am i going crazy',
        description: 'everytime i reminisce on my childhood i keep hearing music and my thoughts become black and white',
        userId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'RICK GRIMES WON THE EPIC RAP BATTLE OF HISTORY',
        description: 'REFER TO THE TITLE',
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'petition to have squidward play music at work',
        description: 'i really like squidwards music and i would love for him to play it when we arent busy',
        userId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'riddle me this',
        description: '... --- .-.. --- / . ... - --- -.-- / . -. / . ... - . / ... .. - .. --- / .-- . -... / .--. --- .-. --.- ..- . / . ... -.-. ..- -.-. .... ..-.. / --.- ..- . / -... .- - -- .- -. / . ... - .- -... .- / . -. / ..-.. .-.. .-.-.-',
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'sad cuh hours (༎ຶٹ༎ຶ)',
        description: 'un 18 pa quitarme éstas ganas de extrañarte',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'freaking lost my mp3 player',
        description: 'i let stupid pedroᶠᵒʳᵖʳᵉˢᶦᵈᵉⁿᵗ borrow my mp3 and he lost it, UGHH IDIOT, anyway, new mp3 recommendations?',
        userId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'Bad Vibes Forever',
        description:'The late rapper makes a similar petition on his second posthumous album, billed as his “final” release. “I’m tryna to tell the world to fucking relax, bro… Let me be a prince, let me be a king, nigga,” he says in a rambling snippet repurposed as the album’s introduction. XXXTentacion’s estate clearly chose this clip to honor and preserve the self-image that the rapper was cultivating when he was shot and killed in 2018 while awaiting trial for domestic abuse charges. But like ? and his first posthumous record, Skins, Bad Vibes Forever fails to make his personal perception and aesthetic ideas cohere into anything other than generic kingmaking. This flimsy, haphazard album attempts to memorialize the rapper as a martyr and renaissance man when he is neither.',
        userId:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'Introduction to my new Album',
        description:'To find, to find the exact words, to find the perfect words, to say less, but to say more, was ideal with this project, and to let my energy and mind be felt, in a less aggressive way, but a more passive and genius way was ideal with this album, to show the versatility and to show the open- to open minds in itself was the goal of this album, and to acquire a large amount of passion, and love and appreciation for myself was the goal of this album; loyalty to myself was the goal of this album. So, Ill offer this warning and set of instructions; if you are not open-minded before you listen to this album, open your mind. If you dont listen to the alternative sound and youve never been into the alternative sound and have not been open to trying different things; open your mind before you listen to this album. You can listen to it anywhere, preferably your room, your car, but it can be played anywhere. This album is far different, far more versatile, far more uplifting than the last. Its something you can find comfort in, its very comforting, but discomforting at the same time. So, with this project, again, youre entering my mind, feeling my insanity, feeling my, my genius, my energy. Enjoy',
        userId:14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'Fly Me to the Moon greatest song ever??',
        description:'Frank Sinatra is the one of the worlds greatest artist of all time, never meet an artist with his range! Fly me to the moon is a classic that can be listened to at any time of the year. There has been thousands of covers of "Fly Me to the Moon" and all of them are amazing, one of my favorite covers is by Frank Ocean.',
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'NIKI MINAJ IS THE GOAT!',
        description:'HAVE YOU EVER LISTENED TO MONSTER?!?!?! SHE SOLOS YOUR FAVORITE RAPPER. NO COMPETITION! BUY MY NEW STEM PLAYER',
        userId:13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'KANYE WEST MUSIC IS NOT IT!!',
        description:'LAST NIGHT, WHILE I WAS OUT FIGHTING CRIME OF COURSE, WHEN I SAW A MAN LITTER! SO OBVIOUSLY I HAD TO TAKE HIM DOWN! WHEN I HUNG HIM BY HIS DRAWS ON A GARGOYLE I NOTICED HIS PHONE WAS PLAYING KAYNE WEST!! This criminal was playing "Hey Mama"... Martha... she was my mama... THEN I REALIZED IF CRIMINALS LISTEN TO KAYNE WEST THEN I CANT!!!',
        userId:8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Records', null, {});
  }
};
