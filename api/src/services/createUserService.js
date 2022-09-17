const bcrypt = require('bcrypt')
const prismaClient = require('../database/prismaClient')
const createUserResponse = require('../mapper/createUserResponse')

async function createUser(request, response) {
  const { nome, email, dataNascimento, urlImagem } = request.body
  const SALT_ROUNDS = 8
  const senha = bcrypt.hashSync(request.body.senha, SALT_ROUNDS)

  try {
    const user = await prismaClient.usuario.create({
      data: {
        nome: nome,
        email: email,
        data_nascimento: new Date(dataNascimento),
        senha: senha,
        url_imagem: urlImagem,
      },
    })

    const userResponse = createUserResponse(user)

    return response.status(201).send(userResponse)
  } catch (error) {
    if (error.code === 'P2002') {
      return response.status(403).send('Este email já foi  cadastrado !')
    }

    return response.status(500).send('erro interno')
  }
}

module.exports = createUser
