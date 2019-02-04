const User = require('../models/User')
const Category = require('../models/Category')

const categoryController = {

    index: (req, res) => {
        const userId = req.params.userId;
        User.findById(userId)
            .populate('categories')
            .then(user => {
                res.send(user.categories)
            })                                          
    },

    show: (req, res) => {
        const categoryId = req.params.categoryId;
        Category.findById(categoryId)
            .then(category => {
                // console.log(categories)
                res.send(category)
            })
    },
    delete: (req, res) => {
        const categoryId = req.params.categoryId;
        Category.findByIdAndDelete(categoryId)
            .then(() => {
                res.send(200)
            })
    },

    update: (req, res) => {
        const categoryId = req.params.categoryId;
       Category.findByIdAndUpdate(categoryId, req.body, { new: true })
            .then((updatedCategory) => {
                updatedCategory.save()
                res.send(updatedCategory)
            })
        },
   
    create: (req, res) => {
        const categoryId = req.params.userId;
        User.findById(categoryId).then((user) => {
            Category.create(req.body).then((newCategory) => {
                user.categories.push(newCategory);
                user.save();
                res.send(newCategory)
            })
        })
    }

}



module.exports = categoryController 