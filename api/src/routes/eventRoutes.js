const EventController = require('../controllers/eventController')
const { Router } = require('express');
const verifyJWT = require('../middlewares/verifyJWT');

const eventRoutes = Router()

eventRoutes.post('/:eventoId/confirmar', (request, response) =>
  EventController.confirmarPresenca(request, response)
)

eventRoutes.use(verifyJWT);

eventRoutes.post('/:userId', (request, response) =>
  EventController.createEvent(request, response)
)

eventRoutes.get('/:hashEvento', (request, response) =>
  EventController.getEvent(request, response)
)

eventRoutes.get('/:userId/:page/:size', (request, response) =>
  EventController.listEventsPageable(request, response)
)

eventRoutes.put('/:userId/alterAtivo', (request, response) =>
  EventController.alterAtivoEvento(request, response)
)

eventRoutes.put('/:userId/:hashEvento/editar', (request, response) =>
  EventController.editarEvento(request, response)
)

eventRoutes.get('/:eventoId/listarConfirmados', (request, response) =>
  EventController.listarConfirmados(request, response)
)



eventRoutes.delete(
  '/removeEvento/:userId/:eventoHash/',
  (request, response) => EventController.removerEvento(request, response)
)

eventRoutes.delete('/:userId/:eventoId/:userRemoved', (request, response) =>
  EventController.removerPresenca(request, response)
)

module.exports = eventRoutes
