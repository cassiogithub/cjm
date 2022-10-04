const createEvent = require('../services/event/createEventService')
const getEvent = require('../services/event/getEventService')
const listEventsPageable = require('../services/event/listEventsPageableService')
const alterAtivoEvento = require('../services/event/alterAtivoEventoService')
const listarConfirmados = require('../services/event/listarConfirmadosService')
const confirmarPresenca = require('../services/event/confirmarPresencaService')
const removerPresenca = require('../services/event/removerPresencaService')
const removeEvento = require('../services/event/removeEventoService')

class EventController {
  createEvent(request, response) {
    return createEvent(request, response)
  }

  getEvent(request, response) {
    return getEvent(request, response)
  }

  listEventsPageable(request, response) {
    return listEventsPageable(request, response)
  }

  alterAtivoEvento(request, response) {
    return alterAtivoEvento(request, response)
  }

  listarConfirmados(request, response) {
    return listarConfirmados(request, response)
  }

  confirmarPresenca(request, response) {
    return confirmarPresenca(request, response)
  }

  removerEvento(request, response) {
    console.log('to na controller')
    return removeEvento(request, response)
  }

  removerPresenca(request, response) {
    return removerPresenca(request, response)
  }
}

module.exports = new EventController()
