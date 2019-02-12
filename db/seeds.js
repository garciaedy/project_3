const User = require("../models/User");
const VideoGame = require("../models/VideoGame");
const mongoose = require("./connections");

const kombat = new VideoGame({
    name: "Mortal Kombat 11",
    year: 2019,
    category: "game",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Mortal_Kombat_11_cover_art.png/220px-Mortal_Kombat_11_cover_art.png",
    description: "fighting"

});

const dBall = new VideoGame({
  name: "dragon ball super: broly",

    category: "movie",
    image: "https://media.comicbook.com/2017/09/dragon-ball-broly-strongest-fighter-universe-7-1022229-1280x0.jpg",
    year: 2018,
description: "fighting",
});

const daWeb = new VideoGame({
     name: "spider-man: into the spider-verse",
    image: "http://intothespiderverse.movie/images/share/shareImage.jpg",
    category: "movie",
     year: 2018,
    description: "anime",
});

const sun = new VideoGame({
   name: "The Sun Dog",
    image: "https://images-na.ssl-images-amazon.com/images/I/71LIUwoPc3L.jpg",
    category: "book",
    year: 2017,
    description: "Horror",
});

const vol1 = new VideoGame({
  name: "For the Kid I Saw in My Dreams, Vol. 1",
    image: "https://cdn.animeuknews.net/app/uploads/2019/01/For-the-Kid-I-Saw-In-my-dreams-volume-1-cover-170x244.jpg",
    category: "book",
    year: 2018,
    description: "fantacy",
});
const smash = new VideoGame({
    name: "Super Smash Bros. Ultimate",
    image:"https://i.imgur.com/4aAixLM.png",
     category: "game",
     year: 2018,
    description: "fighting",

})
const edy = new User({
  name: "Edy",
  category: "ps4",
  image: "https://images.unsplash.com/photo-1542838687-f960f044ef1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  games: [dBall,sun, smash]
});

const aaron = new User({
  name: "Aaron",
  category: "books",
image: "https://images.unsplash.com/photo-1549482287-9237fdb5bec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
  games: [ kombat, daWeb, vol1]
});

User.remove({})
  .then(() => VideoGame.remove({}))
  .then(() => VideoGame.insertMany([kombat, dBall, daWeb, sun, vol1, smash]))
  .then(() => edy.save())
  .then(() => aaron.save())
  .then(() => console.log("Successful Save"))

  .then(() => mongoose.connection.close());
