const UserController = require('../controllers/userController')
const EventController = require('../controllers/eventController')
const { Router } = require('express')
const userRoutes = Router()

userRoutes.post('/', (request, response) =>
  UserController.createUser(request, response)
)

userRoutes.post('/login', (request, response) =>
  UserController.login(request, response)
)

module.exports = userRoutes
