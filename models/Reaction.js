const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId },
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
    },
  },
  {
    toJSON: {
        getters: true, 
    }, 
    id: false, 
  }
);

  module.exports = reactionSchema; 