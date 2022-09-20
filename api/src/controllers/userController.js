const createUser = require('../services/user/createUserService')
const login = require('../services/user/loginService')
class UserController {
  createUser(request, response) {
    return createUser(request, response)
  }

  login(request, response) {
    return login(request, response)
  }
}

module.exports = new UserController()
