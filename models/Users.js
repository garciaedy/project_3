const mongoose = require('../db/connections')
const Schema = mongoose.Schema



module.exports = mongoose.model('Idea', Idea)

const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const User = new Schema ({
     name: String,
     category: String,
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
 


module.exports = mongoose.model("User", User);
