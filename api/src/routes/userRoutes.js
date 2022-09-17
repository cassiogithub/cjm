const { Router } = require('express')
const UserController = require('../controllers/userController')
const routes = Router()

routes.post('/usuarios', (request, response) =>
  UserController.createUser(request, response)
)
routes.post('/login', (request, response) =>
  UserController.login(request, response)
)

module.exports = routes
