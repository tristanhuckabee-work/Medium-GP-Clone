'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Records';
    return queryInterface.bulkInsert(options, [
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
        updatedAt: new Date(),
        title: 'Blackened Tech-Death',
        description: "Yes, 'blackened tech-death' is an actual metal subgenre, not the name of a futuristic plague. Some subgenres like thrash metal and heavy metal have seen considerable mainstream popularity with bands like Metallica and Iron Maiden, the former featuring fast aggressive riffing and drums with James Hetfield’s snarled vocals, and the latter embracing a more melodic approach with soaring guitar harmonies and Bruce Dickinson’s operatic delivery.The guttural growled or screamed vocals that are often stereotypically associated with metal actually occur in a relatively small percentage of metal, in subgenres like death metal, black metal, and metalcore. Other subgenres take a far more melodic approach, like symphonic metal, progressive metal, power metal, and so on. The ever-increasing number of subgenres has become something of an inside joke within the metal community, but it only goes to show that there is metal out there to cater to everyone. If you haven’t found a single metal song you like, you just haven’t looked hard enough!",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'My Life was Saved by Yell of Thirst',
        description: "Field of View's 'Yell of Thirst' saved my life. I was standing at the edge of a rooftop, threatening to throw myself from the edge if Yugi Mutou didn't let me win the duel!!! If it wasn't for that song then I wouldn't have been givin main antagonist privelages.",
        userId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'MONSTER',
        description: 'Broooo!!! Why is nobody talking about how 🔥🔥🔥 Monster by Em is??? Like the Juice WRLD (rip) refrain is soo HYPE!!! Under-rated for sure.',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Is Sea-Shanty A Genre?',
        description: "Like are songs like the one from 'Pirates of the Carribean: At World's End' a type of music?",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    options.tableName = 'Records';
    return queryInterface.bulkDelete(options);
  }
};
