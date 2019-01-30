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
   show: (req, res) =>{
       const categoriesId = req.params.categoriesId;
       User.findById(userId)
       .populate('comments')
       .then(categories =>{
           console.log(categories)
       })
   },
   update: (req,res) =>{
       const categoriesId = req.params.categoriesId;
       Category.findByIdAndUpdate(categoriesId,req.body, {new: true})
       .then((updateCategory) =>{
           updateCategory.save()
           res.send(updateCategory)
       })
   },
   delete: (req,res) =>{
       const categoriesId = req.params.categoriesId;
       Category.findByIdAndRemove(categoriesId)
       .then(()=>{
           res.send(200)
       })
   },
create: (req, res) =>{
    const userId = req.params.userId;
   User.findById(userId).then(user =>{
        Category.create(req.body).then(newCategory =>{
            user.categories.push(newCategory);
            user.save();
            res.send(newCategory)
        });
    });
}

}



module.exports = categoryController 