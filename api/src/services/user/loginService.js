const { BAD_REQUEST, UNAUTHORIZED, OK } = require('../../constants/http-status')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prismaClient = require('../../database/prismaClient')
const loginResponse = require('../../mapper/loginResponse')

async function login(request, response) {
  const { email, senha } = request.body
  const invalidCredentials = 'Usuário ou Senha incorretos!'

  if (!email || !senha) {
    return response.status(BAD_REQUEST).send('Os campos Email e Senha são obrigatórios')
  }

  const user = await prismaClient.usuario.findUnique({
    where: { email: email },
  })

  if (!user) {
    return response.status(UNAUTHORIZED).send(invalidCredentials)
  }

  const isValidPassword = bcrypt.compareSync(senha, user.senha)
  if (!isValidPassword) {
    return response.status(UNAUTHORIZED).send(invalidCredentials)
  }

  const JWTdata = {
    time: Date(),
    userId: user.id,
  }
  const token = jwt.sign(JWTdata, process.env.JWT_SECRET)

  return response.status(OK).send(loginResponse(user, token))
}

module.exports = login
