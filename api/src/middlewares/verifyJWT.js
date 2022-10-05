const jwt = require('jsonwebtoken')
const { UNAUTHORIZED } = require('../constants/http-status')

module.exports = function verifyJWT(request, response, next) {
  const authHeader = request.headers['authorization']

  if (!authHeader)
    return response
      .status(UNAUTHORIZED).send('Nenhum token foi informado.')

  const [, token] = authHeader.split(' ')

  jwt.verify(token, process.env.JWT_SECRET, function (err) {
    if (err)
      return response
        .status(UNAUTHORIZED).send('Token é inválido.')

    next()
  })
}
