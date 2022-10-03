const prismaClient = require('../../database/prismaClient')
const { NOT_FOUND, OK } = require('../../constants/http-status')

async function listarConfirmados(request, response) {
  const eventoId = parseInt(request.params.eventoId)

  if (isNaN(eventoId)) {
    return response.status(NOT_FOUND).send('Dados informados inválidos')
  }

  const event = await prismaClient.evento.findUnique({
    where: {
      id: eventoId,
    },
  })

  if (!event) {
    return response.status(NOT_FOUND).send('Evento não encontrado')
  }

  const listaConfirmados = await prismaClient.eventoConfirmados.findMany({
    where: {
      eventoId: eventoId,
    },
  })

  return response.status(OK).send(listaConfirmados)
}

module.exports = listarConfirmados
