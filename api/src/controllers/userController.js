const createUser = require("../services/createUserService");
class UserController {
  createUser(request, response) {
    return createUser(request, response);
  }
}

module.exports = new UserController();
