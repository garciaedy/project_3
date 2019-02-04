const mongoose = require("./connections")
const User = require("../models/User");
const Category = require("../models/Category");


const kombat = new Category({
    name: "Mortal Kombat 11",
    description: "fighting",
    // year: 2019,
    // category: "game",
    image: "https://mortalkombat.com/preorder?gclid=Cj0KCQiAkMDiBRDNARIsACKP1FEv3kovPJTL5q19Gmch_opatqamQk0iB1QBIa6c7R61e24WIIyHkBAaAsmNEALw_wcB"

})
const dBall = new Category({
    name: "dragon ball super: broly",
   description: "amime",
    // year: 2018,
    // category: "movie",
    image: "https://www.youtube.com/watch?v=FHgm89hKpXU"

})
const daWeb = new Category({
    name: "spider-man: into the spider-verse",
    description: "anime",
    // year: 2018,
    // category: "movie",
    image: "https://www.youtube.com/watch?v=FU0i0eg6qak"

})
const sun = new Category({
    name: "The Sun Dog",
    description: "Horror",
    // year: 2017,
    // category: "book",
    image: "https://www.barnesandnoble.com/w/the-sun-dog-stephen-king/1013077297?ean=9781982115425#/"

})
const vol1 = new Category({
    name: "For the Kid I Saw in My Dreams, Vol. 1",
    description: "fantacy",
    // year: 2018,
    // category: "book",
    image: "https://www.barnesandnoble.com/w/for-the-kid-i-saw-in-my-dreams-vol-1-kei-sanbe/1129915926?ean=9781975328863#/"

})
const smash = new Category({
    name: "Super Smash Bros. Ultimate",
    description: "fighting",
    // year: 2018,
    // category: "game",
    image: "https://www.smashbros.com/en_US/"

})
const edy = new User ({
    username: 'edygarcia',
    password: 'project3' ,
    image: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJooaE7JPgAhVGNd8KHSNZADcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2ryxpNewOHg&psig=AOvVaw0YCygJEz8pDnIWJ1TYScfl&ust=1548880603992617",
    categories:[dBall,sun, smash]
})
const aaron = new User ({
    username: 'garciaedy',
    password: '3project',
    image: "https://www.google.com/search?q=react.js+express&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjy5J6B7JPgAhUtmeAKHR36AZsQ_AUIECgD&biw=1195&bih=722#imgrc=AzscrIxgOWCrlM:",
  categories:[ kombat, daWeb, vol1]

});



User.remove({})
    .then(() => Category.remove({}))
    .then(() => Category.insertMany([kombat, dBall, daWeb, sun, vol1, smash]))
    .then(() => edy.save())
    .then(() => aaron.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())