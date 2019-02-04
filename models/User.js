const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    image: String,
   categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
});



module.exports = mongoose.model('User', User);
