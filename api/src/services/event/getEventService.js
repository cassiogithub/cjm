const prismaClient = require('../../database/prismaClient')
const { NOT_FOUND, OK } = require('../../constants/http-status')
const getEventResponse = require('../../mapper/getEventResponse')

async function getEvent(request, response) {
  const { hashEvento } = request.body

  const event = await prismaClient.evento.findFirst({
    where: {
      hash_evento: hashEvento,
    },
  })

  const user = await prismaClient.usuario.findUnique({
    where: {
      id: event.usuarioId,
    },
  })

  if (!event) {
    return response.status(NOT_FOUND).send('Hash informado não é valido!')
  }

  const eventResponse = getEventResponse(event, user)

  return response.status(OK).send(eventResponse)
}

module.exports = getEvent
