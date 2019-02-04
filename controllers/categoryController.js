const User = require('../models/User')
const Category = require('../models/Category')

const categoryController = {

    index: (req, res) => {
        const userId = req.params.userId;
        User.findById(userId)
            .populate('entertainment')
            .then(user => {
                res.send(user.entertainment)
            })                                          
    },

    show: (req, res) => {
        const categoriesId = req.params.categoriesId;
        Category.findById(categoriesId)
            .then(entertain => {
                // console.log(categories)
                res.send(entertain)
            })
    },
    update: (req, res) => {
        const categoriesId = req.params.categoriesId;
       Category.findByIdAndUpdate(categoriesId, req.body, { new: true })
            .then((updatedEntertain) => {
                updatedEntertain.save()
                res.send(updatedEntertain)
            })
    },
    delete: (req, res) => {
        const categoriesId = req.params.categoriesId;
        Category.findByIdAndRemove(categoriesId)
            .then(() => {
                res.send(200)
            })
    },

    create: (req, res) => {
        const userId = req.params.userId;
        User.findById(userId).then((user) => {
            Category.create(req.body).then((newCat) => {
                user.entertainment.push(newCat);
                user.save();
                res.send(newCat)
            });
        });
    }

}



module.exports = categoryController 