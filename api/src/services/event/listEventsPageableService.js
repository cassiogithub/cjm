const prismaClient = require('../../database/prismaClient')
const { OK, BAD_REQUEST, NOT_FOUND } = require('../../constants/http-status')

async function listEventsPageable(request, response) {
  const { userId, page, size } = request.params

  const user = await prismaClient.usuario.findUnique({
    where: {
      id: parseInt(userId),
    },
  })

  if (!user) {
    return response.status(NOT_FOUND).send('Usuário informado não é valido!')
  }

  const events = await prismaClient.evento.findMany({
    skip: page * size,
    take: parseInt(size),
    where: {
      usuarioId: parseInt(userId),
    },
  })

  if (events.length <= 0) {
    return response.status(BAD_REQUEST).send('Ops, página solicitada não contém itens')
  }

  return response.status(OK).send(events)
}

module.exports = listEventsPageable
