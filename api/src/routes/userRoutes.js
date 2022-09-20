const { Router } = require('express')
const UserController = require('../controllers/userController')
const EventController = require('../controllers/eventController')
const routes = Router()

routes.post('/usuarios', (request, response) => UserController.createUser(request, response))

routes.post('/login', (request, response) => UserController.login(request, response))

routes.post('/evento/:userId', (request, response) =>
  EventController.createEvent(request, response)
)
routes.get('/evento', (request, response) =>
  EventController.getEvent(request, response)
)

module.exports = routes
