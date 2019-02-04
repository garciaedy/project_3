const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const categoryController = require('../controllers/categoryController')


// router.get('/api/users', userController.index)
// router.post('/api/users/', userController.create)
// router.get('/api/users/:userId', userController.show)
// router.patch('/api/users/:userId', userController.update)
// router.delete('/api/users/:userId', userController.delete)\
router.get('/api/users', userController.index)
router.get('/api/users/:userId', userController.show)
router.post('/api/users', userController.create)
router.delete('/api/users/:userId', userController.delete)
router.patch('/api/users/:userId', userController.update)


router.get('/api/users/:userId/categories', categoryController.index)
router.post('/api/users/:userId/categories', categoryController.create)
router.get('/api/categories/:categoriesId', categoryController.show)
router.patch('/api/categories/:categoriesId', categoryController.update)
router.delete('/api/categories/:categoriesId',categoryController.delete)
// // router.get('/api/users/:userId/ideas', ideasController.index)
// // router.get('/api/ideas/:ideaId', ideasController.show)
// // router.delete('/api/ideas/:ideaId', ideasController.delete)
// // router.patch('/api/ideas/:ideaId', ideasController.update)
// // router.post('/api/users/:userId/ideas', ideasController.create)

module.exports = router

