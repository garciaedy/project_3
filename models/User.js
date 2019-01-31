const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema ({
     
     image: String,
     username: String,
     password: String,
     entertain: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
});
 


module.exports = mongoose.model('User', User);
