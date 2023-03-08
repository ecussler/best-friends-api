const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");
const Reaction = require('./Reaction'); 


const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  // Imports Reaction schema
  reactions: [Reaction],
},
{
    toJSON: {
        getters: true, 
    }, 
    id: false, 
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
