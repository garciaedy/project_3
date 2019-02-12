const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const categoryController = require('../controllers/categoryController')

router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/videogames', videoGamesController.index)
router.post('/api/users/:userId/videogames', videoGamesController.create)
router.get('/api/users/:userId/videogames/:videogamesId', videoGamesController.show)
router.patch('/api/users/:userId/videogames/:videogamesId', videoGamesController.update)
router.delete('/api/users/:userId/videogames/:videogamesId', videoGamesController.delete)

module.exports = router