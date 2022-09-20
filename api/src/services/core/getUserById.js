const prismaClient = require('../../database/prismaClient')

async function getUserById(id, response) {
  const user = await prismaClient.usuario.findUnique({
    where: {
      id: id,
    },
  })
  
  if (!user) {
    return response.status(NOT_FOUND).send('O ID informado não é valido')
  }

  return user
}

module.exports = getUserById
