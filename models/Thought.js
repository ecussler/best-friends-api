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
    // NEED GETTER METHOD TO FORMAT TIMESTAMP ON QUERY
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [Reaction],
},
{
    toJSON: {
        getters: true, 
    }, 
    id: false, 
  }
);

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;
