const {
  OK,
  NOT_FOUND,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} = require('../../constants/http-status')
const prismaClient = require('../../database/prismaClient')
const editarEventoResponse = require('../../mapper/editarEventoResponse')

async function editarEvento(request, response) {
  const userId = parseInt(request.params.userId)
  const hashEvento = request.params.hashEvento
  const { nome, local } = request.body
  const dataEvento = new Date(request.body.dataEvento)

  if (isNaN(userId) || !hashEvento || !dataEvento) {
    return response.status(BAD_REQUEST).send('Parâmetros inválidos')
  }

  const event = await prismaClient.evento.findFirst({
    where: {
      hash_evento: hashEvento,
      usuarioId: {
        equals: userId,
      },
    },
  })

  if (!event) {
    return response
      .status(NOT_FOUND)
      .send(
        'Evento não encontrado, verifique se você é proprietário deste evento'
      )
  }

  const eventChanged = await prismaClient.evento.updateMany({
    where: {
      hash_evento: hashEvento,
    },
    data: {
      nome: nome,
      local: local,
      data_evento: dataEvento,
    },
  })

  if (eventChanged.count === 0) {
    return response
      .status(INTERNAL_SERVER_ERROR)
      .send('Um erro interno ocorreu, tente novamente mais tarde.')
  }

  const responseEvent = editarEventoResponse(
    hashEvento,
    nome,
    local,
    dataEvento
  )
  return response.status(OK).send(responseEvent)
}

module.exports = editarEvento
