const { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR } = require('../../constants/http-status')
const bcrypt = require('bcrypt')
const prismaClient = require('../../database/prismaClient')
const createUserResponse = require('../../mapper/createUserResponse')

async function createUser(request, response) {
  const { nome, email, dataNascimento, urlImagem } = request.body
  const SALT_ROUNDS = 8
  const senha = bcrypt.hashSync(request.body.senha, SALT_ROUNDS)

  if (!nome || !email || !dataNascimento || !senha) {
    return response
      .status(BAD_REQUEST)
      .send('Os campos Nome, Email, data de nascimento e senha, são obrigatórios!')
  }

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

    return response.status(CREATED).send(userResponse)
  } catch (error) {
    if (error.code === 'P2002') {
      return response.status(BAD_REQUEST).send('Este email já foi  cadastrado !')
    }

    return response.status(INTERNAL_SERVER_ERROR).send('erro interno')
  }
}

module.exports = createUser
