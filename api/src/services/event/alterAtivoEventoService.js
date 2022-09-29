const { OK, NOT_FOUND, BAD_REQUEST } = require('../../constants/http-status')
const prismaClient = require('../../database/prismaClient')

async function alterAtivoEvento(request, response) {
  const userId = parseInt(request.params.userId)
  const eventoId = parseInt(request.body.eventoId)

  if (isNaN(userId) || isNaN(eventoId)) {
    return response.status(BAD_REQUEST).send('Parâmetros inválidos')
  }

  const event = await prismaClient.evento.findFirst({
    where: {
      id: eventoId,
      usuarioId: userId,
    },
  })

  if (!event) {
    return response.status(NOT_FOUND).send('Evento não encontrado')
  }

  const eventChanged = await prismaClient.evento.update({
    where: {
      id: event.id,
    },
    data: {
      ativo: !event.ativo,
    },
  })

  return response.status(OK).send(eventChanged)
}

module.exports = alterAtivoEvento
