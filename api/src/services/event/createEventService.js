const prismaClient = require('../../database/prismaClient')
const crypto = require('crypto')
const shortUrl = require('../core/shortUrl-cdpt-Service')
const FRONT_URL = require('../../constants/front_url')
const { NOT_FOUND, BAD_REQUEST, CREATED } = require('../../constants/http-status')

async function createEvent(request, response) {
  const { nome, local, dataEvento } = request.body
  const { userId } = request.params
  if (!nome || !local || !dataEvento || !userId) {
    return response
      .status(BAD_REQUEST)
      .send('Os campos nome, local, dataEvento e userId devem ser informados')
  }

  const user = await prismaClient.usuario.findUnique({
    where: {
      id: parseInt(userId),
    },
  })

  if (!user) {
    return response.status(NOT_FOUND).send('O ID informado não é valido')
  }

  const randomHash = crypto.randomBytes(10).toString('hex')
  // isso aqui demora uns 2 segundos pra responder **api gratuita é osso ** 
  const shortedUrl = await shortUrl(`${FRONT_URL}/convite/${randomHash}`)
  const event = await prismaClient.evento.create({
    data: {
      nome: nome,
      local: local,
      data_evento: new Date(dataEvento),
      link_convite: shortedUrl,
      hash_evento: randomHash,
      usuarioId: user.id,
    },
  })

  return response.status(CREATED).send(event)
}

module.exports = createEvent
