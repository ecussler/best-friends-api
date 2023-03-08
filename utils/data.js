//
// Attempted to seed data for users, thoughts, and reactions but was not able to get it to work fully; will revisit later. 
//


// const names = [
//     'Aaran',
//     'Aaren',
//     'Aarez',
//     'Aarman',
//     'Aaron',
//     'Aaron-James',
//     'Aarron',
//     'Aaryan',
//     'Aaryn',
//     'Aayan',
//     'Aazaan',
//     'Abaan',
//     'Abbas',
//     'Abdallah',
//     'Abdalroof',
//     'Abdihakim',
//     'Abdirahman',
//     'Abdisalam',
//     'Abdul',
//     'Abdul-Aziz',
//     'Abdulbasir',
//     'Abdulkadir',
//     'Abdulkarem',
//     'Smith',
//     'Jones',
//     'Coollastname',
//     'enter_name_here',
//     'Ze',
//     'Zechariah',
//     'Zeek',
//     'Zeeshan',
//     'Zeid',
//     'Zein',
//     'Zen',
//     'Zendel',
//     'Zenith',
//     'Zennon',
//     'Zeph',
//     'Zerah',
//     'Zhen',
//     'Zhi',
//     'Zhong',
//     'Zhuo',
//     'Zi',
//     'Zidane',
//     'Zijie',
//     'Zinedine',
//     'Zion',
//     'Zishan',
//     'Ziya',
//     'Ziyaan',
//     'Zohaib',
//     'Zohair',
//     'Zoubaeir',
//     'Zubair',
//     'Zubayr',
//     'Zuriel',
//     'Xander',
//     'Jared',
//     'Grace',
//     'Alex',
//     'Mark',
//     'Tamar',
//     'Farish',
//     'Sarah',
//     'Nathaniel',
//     'Parker',
//   ];

const possibleThoughts = [
    'I would ask for that in writing but then I would lose the satisfaction of not understanding it.',
    'Most orchestras are just 1800s cover bands.',
    'Your stomach thinks all potato is mashed',
    'A group of squid should be called a squad',
    'Saying "um" is the human equivalent to buffering',
    'The object of golf is to play the least amount of golf.',
    'If you are 25 years old, you have already been around for more than 10% of American history.',
    'Dragons would think it cool that we create water in our mouths.',
    'Drinking water with a minty mouth is the cold version of spicy.',
    'Aliens invaded the Moon on July 20th, 1969',
    'History classes are only going to get longer and harder as time goes on',
    'Most of my clothes have been to countries that I have not',
    'Nothing is on fire, fire is on things',
    'The first person who inhaled helium must have been so relieved when the effects wore off.',
    'Lobsters are mermaids to scorpions',
    'The best part of a cucumber tastes like the worst part of a watermelon.',
    'I hate Mondays', 
    'I hate Tuesdays', 
    'I hate Wednesdays', 
    'I hate Thursdays', 
    'I hate Fridays', 
    'I hate Saturdays', 
    'I hate Sundays', 
  ]; 

  
const genRandomIndex = (array) => Math.floor(Math.random() * array.length); 


const seedUsers = () => {
    const users = []; 
    users.push([
        { username: "Rachel", email: "rachelgreen@friends.com"}, 
        { username: "Ross", email: "rossgellar@friends.com"}, 
        { username: "Monica", email: "monicagellar@friends.com"}, 
        { username: "Chandler", email: "chandlerbing@friends.com"}, 
        { username: "Phoebe", email: "phoebebuffary@friends.com"}, 
        { username: "Joey", email: "joeytribbiani@friends.com"},  
    ]);
    return users; 
};

const genThought = () => `${possibleThoughts[genRandomIndex(possibleThoughts)]}`; 
// const genReactions = () => `${possibleReactions[genRandomIndex(possibleReactions)]}`; 

// // const genReactions = (int) => {
// //     if (int === 1) {
// //         return genRandomIndex(possibleReactions); 
// //     }
// //     let results = []; 
// //     for (let i=0; i < int; i++) {
// //         results.push({
// //             reactionBody: genRandomIndex(possibleReactions), 
// //             username: genUsername(), 
// //         })
// //     }
// //     return results; 
// // }; 

// const genFriends = (int) => {
//     if (int === 1) {
//         return genRandomIndex(names); 
//     }
//     let results = []; 
//     for (let i=0; i < int; i++) {
//         results.push({
//             username: genRandomIndex(names), 
//         })
//     }
//     return results; 
// };

module.exports = {
    // genRandomIndex, 
    genThought, 
    // genReactions, 
    // genFriends, 
    seedUsers
}; 



