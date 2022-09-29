const prismaClient = require('../../database/prismaClient')
const { OK, BAD_REQUEST, NOT_FOUND } = require('../../constants/http-status')
const EMPTY_ARRAY = require('../../constants/empty-array')
const listEventsPageableResponse = require('../../mapper/listEventPageableResponse')

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

  const totalEvents = await prismaClient.evento.count()
  const totalPages = Math.ceil(totalEvents / size)

  if (events.length <= EMPTY_ARRAY) {
    return response.status(BAD_REQUEST).send('Ops, página solicitada não contém itens')
  }

  const responseMapper = listEventsPageableResponse(events, totalPages)

  return response.status(OK).send(responseMapper)
}

module.exports = listEventsPageable
