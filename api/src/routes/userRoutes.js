const { Router } = require("express");
const UserController = require("../controllers/userController");
const routes = Router();

routes.get("/usuarios", UserController.list);
routes.get("/usuarios/login", UserController.list);

module.exports = routes;

/*

*/