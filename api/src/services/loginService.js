const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prismaClient = require('../database/prismaClient')
const loginResponse = require('../mapper/loginResponse')

const ONE_HOUR = 3600

async function login(request, response) {
  const { email, senha } = request.body
  const invalidCredentials = { error: 'Usuário ou Senha incorretos!' }

  const user = await prismaClient.usuario.findUnique({
    where: { email: email },
  })

  if (!user) {
    return response.status(401).send(invalidCredentials)
  }

  const isValidPassword = bcrypt.compareSync(senha, user.senha)
  if (!isValidPassword) {
    return response.status(401).send(invalidCredentials)
  }

  const JWTdata = {
    time: Date(),
    userId: user.id,
  }
  const token = jwt.sign(JWTdata, process.env.JWT_SECRET)

  return response.status(200).send(loginResponse(user, token))
}

module.exports = login
