const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const VideoGame = new Schema({
  name: String,
  image: String,
  category: String,
  year: Number,
  descripion: String,
});

module.exports = mongoose.model("VideoGame", VideoGame);
