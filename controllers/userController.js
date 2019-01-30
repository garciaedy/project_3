const User = require('../models/User')
const Category = require("../models/Category")

const userController = {
index: (req, res) =>{
    User.find({}).then((users) =>{
res.send(users)
    })
},









}



module.exports = userController