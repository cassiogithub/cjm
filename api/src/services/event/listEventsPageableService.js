const prismaClient = require('../../database/prismaClient')
const { OK, BAD_REQUEST, NOT_FOUND } = require('../../constants/http-status')
const EMPTY_ARRAY = require('../../constants/empty-array')

async function listEventsPageable(request, response) {
  const userId = parseInt(request.params.userId)
  const page = parseInt(request.params.page)
  const size = parseInt(request.params.size)

  if (isNaN(userId) || isNaN(page) || isNaN(size)) {
    return response.status(BAD_REQUEST).send('Os parâmetros informados são inválidos')
  }

  const user = await prismaClient.usuario.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return response.status(NOT_FOUND).send('Usuário informado não é válido!')
  }

  const events = await prismaClient.evento.findMany({
    skip: page * size,
    take: size,
    where: {
      usuarioId: userId,
    },
    orderBy: {
      data_evento: 'desc',
    },
  })

  if (events.length <= EMPTY_ARRAY) {
    return response.status(BAD_REQUEST).send('Ops, página solicitada não contém itens')
  }

  return response.status(OK).send(events)
}

module.exports = listEventsPageable