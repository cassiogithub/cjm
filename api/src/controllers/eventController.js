const createEvent = require('../services/event/createEventService')
const getEvent = require('../services/event/getEventService')

class EventController {
  createEvent(request, response) {
    return createEvent(request, response)
  }
  getEvent(request, response) {
    return getEvent(request, response)
  }
}

module.exports = new EventController()
