const User = require('../models/User')
const Category = require("../models/Category")

const userController = {
index: (req, res) =>{
    User.find({}).then((users) =>{
res.send(users)
    })
},
show: (req, res) =>{
    User.findById(req.params.userId).populate('categories')
    .then((user) =>{
        res.send(user)
    })
},
update: (req, res) =>{
    User.findByIdAndUpdate(req.params.userId, req.body)
    .then((updateUser) =>{
        updateUser.save()
        res.send(updateUser)
    })
},
delete: (req, res) =>{
    User.findByIdAndUpdate(req.params.userId, req.body)
    .then((updateUser) =>{
        updateUser.save()
        res.send(updateUser)
    })
},
create:(req, res) =>{
    User.create(req.body)
    .then((user) =>{
        res.send(user)
    })
 }
}

module.exports = userController