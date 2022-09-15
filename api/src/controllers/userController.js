const listUser = require("../services/listUser");
class UserController {
  list(req, res) {
    const users = listUser();
    return res.status(200).send(users);
  }
}

module.exports = new UserController();
