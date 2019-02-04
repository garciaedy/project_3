const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const categoryController = require('../controllers/categoryController')


router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)


router.get('/api/users/:userId/categories', categoryController.index)
router.post('/api/users/:userId/categories', categoryController.create)
router.get('/api/categories/:categoryId', categoryController.show)
router.patch('/api/categories/:categoryId', categoryController.update)
router.delete('/api/categories/:categoryId',categoryController.delete)

module.exports = router

