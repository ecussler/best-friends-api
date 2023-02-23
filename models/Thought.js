const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose'); 


const reactionSchema = new Schema ({
    reactionId: { type: ObjectId }, 
    reactionBody: {
        type: String, 
        required: true, 
        maxLength: 280, 
    }, 
    username: {
        type: String, 
        required: true, 
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
        // NEED GETTER METHOD TO FORMAT TIMESTAMP ON QUERY 
    }
}); 


const thoughtSchema = new Schema ({
    thoughtText: {
        type: String, 
        required: true, 
        minLength: 1, 
        maxLength: 280, 
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
        // NEED GETTER METHOD TO FORMAT TIMESTAMP ON QUERY 
    }, 
    username: {
        type: String, 
        required: true, 
    }, 
    reactions: [reactionSchema], 
}); 

const Thought = mongoose.model('thought', thoughtSchema); 

module.exports = Thought; 