const User = require('../models/User')
const Category = require('../models/Category')

const categoryController ={
   index: (req, res) =>{
const userId = req.params.userId;
User.findById(userId)
.populate('categories')
.then(user =>{
    res.send(user.trips)
})
   } ,
   s






}



module.exports = categoryController 