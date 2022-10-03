const prismaClient = require('../../database/prismaClient')
const {
  NOT_FOUND,
  BAD_REQUEST,
  NO_CONTENT,
} = require('../../constants/http-status')

async function removerPresenca(request, response) {
  const userRemoved = parseInt(request.body.userRemoved)
  const eventoId = parseInt(request.params.eventoId)
  const userId = parseInt(request.params.userId)

  if (isNaN(eventoId) || isNaN(userId) || isNaN(userRemoved)) {
    return response
      .status(BAD_REQUEST)
      .send('Os parametros informados são inválidos')
  }

  const isOwner = await prismaClient.evento.findFirst({
    where: {
      id: eventoId,
      usuarioId: {
        equals: userId,
      },
    },
  })

  if (!isOwner) {
    return response
      .status(NOT_FOUND)
      .send('Você não é proprietário deste evento')
  }

  const removed = await prismaClient.eventoConfirmados.deleteMany({
    where: {
      id: {
        equals: userRemoved,
      },
    },
  })
  
  if (removed.count === 0) {
    return response
      .status(BAD_REQUEST)
      .send('Os parametros informados são inválidos')
  }

  return response.sendStatus(NO_CONTENT)
}

module.exports = removerPresenca
