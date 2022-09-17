const createUser = require('../services/createUserService')
const login = require('../services/loginService')
class UserController {
  createUser(request, response) {
    return createUser(request, response)
  }

  login(request, response) {
    return login(request, response)
  }
}

module.exports = new UserController()
