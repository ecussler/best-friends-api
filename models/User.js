
const { Schema, model } = require('mongoose'); 

const userSchema = new Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true,
        match: /.+\@.+\..+/,
    },
    thoughts: [
        {
            // Imports Thought schema
            type: Schema.Types.ObjectId, 
            ref: 'thought', 
        },
    ],
    friends: [
        {
            // Calls User schema, self-reference
            type: Schema.Types.ObjectId, 
            ref: 'user', 
        }
    ]
}, 
{
    toJSON: {
        virtuals: true, 
    }, 
    id: false, 
}
); 

// Virtual to calculate the friend count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length; 
}); 

const User = model('user', userSchema);  

module.exports = User; 