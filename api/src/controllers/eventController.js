const createEvent = require('../services/event/createEventService')
const getEvent = require('../services/event/getEventService')
const listEventsPageable = require('../services/event/listEventsPageableService')

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
}

module.exports = new EventController()
