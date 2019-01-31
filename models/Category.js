const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

const Category = new Schema({
name: String,
genre: String,
year: Number,
category: Array,
image: String,

})



module.exports = mongoose.model('Category', Category);
