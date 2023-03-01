const connection = require('../config/connection'); 
const { User, Thought, Reaction } = require('../models'); 
const { genRandomIndex, genUsername, genEmail, genThought, genReactions, genFriends, seedUsers } = require('./data'); 

connection.on('error', (err) => err); 

connection.once('open', async () => {
    console.log('connected'); 
    await User.deleteMany({}); 
    await Thought.deleteMany({}); 
    const users = await User.insertMany(seedUsers()); 
    console.log(users); 

    const thoughts = []; 
    for (const user of users) {
        const thought = await Thought.create({
            username: user.username, 
            thoughtText: genThought(), 

        })
        thoughts.push(thought); 
    }; 


    for (const thought of thoughts) {
        console.log(genReactions());
        const th = await Thought.findOneAndUpdate(
        { _id: thought._id }, 
        { $addToSet: { reactions: { reactionBody: genReactions(), username: users[0] } } }, 
        { runValidators: true, new: true } 
        )
        console.log(th); 
    }

}); 
