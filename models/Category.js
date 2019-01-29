const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const Category = new Schema({
name: String,
publisher: String,
year: Number,
category: String,
image: String,

})



module.exports = mongoose.model("Category", Category);
