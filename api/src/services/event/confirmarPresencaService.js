const prismaClient = require('../../database/prismaClient')
const { NOT_FOUND, OK, CREATED } = require('../../constants/http-status')

async function confirmarPresenca(request, response) {
  const eventoId = parseInt(request.params.eventoId)
  const { nome, contato } = request.body

  if (isNaN(eventoId) || !nome || !contato) {
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

  const confirmarPresenca = await prismaClient.eventoConfirmados.create({
    data: {
      nome: nome,
      contato: contato,
      eventoId: eventoId,
    },
  })

  return response.status(CREATED).send(confirmarPresenca)
}

module.exports = confirmarPresenca
