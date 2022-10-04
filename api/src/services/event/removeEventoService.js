const prismaClient = require('../../database/prismaClient')
const {
  NOT_FOUND,
  BAD_REQUEST,
  NO_CONTENT,
} = require('../../constants/http-status')

async function removeEvento(request, response) {
  const eventoHash = request.params.eventoHash
  const userId = parseInt(request.params.userId)

  if (!eventoHash || isNaN(userId)) {
    return response
      .status(BAD_REQUEST)
      .send('Os parametros informados são inválidos remove')
  }

  const isOwner = await prismaClient.evento.findFirst({
    where: {
      hash_evento: eventoHash,
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

  const removed = await prismaClient.evento.deleteMany({
    where: {
      hash_evento: eventoHash,
    },
  })

  if (removed.count === 0) {
    return response
      .status(BAD_REQUEST)
      .send('Os parametros informados são inválidos')
  }

  return response.sendStatus(NO_CONTENT)
}

module.exports = removeEvento
