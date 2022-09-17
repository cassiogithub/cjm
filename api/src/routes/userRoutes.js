const { Router } = require("express");
const UserController = require("../controllers/userController");
const routes = Router();

routes.post("/usuarios", (request, response) =>
  UserController.createUser(request, response)
);

module.exports = routes;
