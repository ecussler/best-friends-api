//
// Attempted to seed data for users, thoughts, and reactions but was not able to get it to work fully; will revisit later. 
//


const connection = require('../config/connection'); 
const { User, Thought } = require('../models'); 
const { genRandomIndex, genThought, genReactions, genFriends, seedUsers } = require('./data'); 

connection.on('error', (err) => err); 

connection.once('open', async () => {
    console.log('connected'); 
    await User.deleteMany({}); 
    await Thought.deleteMany({}); 
    await User.collection.insertMany([
        { username: "Rachel", email: "rachelgreen@friends.com"}, 
        { username: "Ross", email: "rossgellar@friends.com"}, 
        { username: "Monica", email: "monicagellar@friends.com"}, 
        { username: "Chandler", email: "chandlerbing@friends.com"}, 
        { username: "Phoebe", email: "phoebebuffay@friends.com"}, 
        { username: "Joey", email: "joeytribbiani@friends.com"}, 
    ]); 

    // const thoughts = []; 
    // for (const user of users) {
    //     const thought = await Thought.create({
    //         username: user.username, 
    //         thoughtText: genThought(), 

    //     })
    //     thoughts.push(thought); 
    // }; 


//     for (const thought of thoughts) {
//         console.log(genReactions());
//         const th = await Thought.findOneAndUpdate(
//         { _id: thought._id }, 
//         { $addToSet: { reactions: { reactionBody: genReactions(), username: users[0] } } }, 
//         { runValidators: true, new: true } 
//         )
//         console.log(th); 
//     }

}); 
