const UserController = require('../controllers/userController')
const EventController = require('../controllers/eventController')
const { Router } = require('express')
const routes = Router()

routes.post('/usuarios', (request, response) =>
  UserController.createUser(request, response)
)

routes.post('/login', (request, response) =>
  UserController.login(request, response)
)

routes.post('/evento/:userId', (request, response) =>
  EventController.createEvent(request, response)
)

routes.get('/evento/:hashEvento', (request, response) =>
  EventController.getEvent(request, response)
)

routes.get('/evento/:userId/:page/:size', (request, response) =>
  EventController.listEventsPageable(request, response)
)

routes.put('/evento/:userId/alterAtivo', (request, response) =>
  EventController.alterAtivoEvento(request, response)
)cd ..


routes.get('/evento/:eventoId/listarConfirmados', (request, response) =>
  EventController.listarConfirmados(request, response)
)

routes.post('/evento/:eventoId/confirmar', (request, response) =>
  EventController.confirmarPresenca(request, response)
)

routes.delete('/evento/:userId/:eventoId/:userRemoved', (request, response) =>
  EventController.removerPresenca(request, response)
)

module.exports = routes
