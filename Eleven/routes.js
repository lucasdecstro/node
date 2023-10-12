const express = require("express");
const routes = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

// Rotas da home
routes.get("/", homeController.paginaInicial);
routes.post("/", homeController.trataPost);

// Rotas de contato
routes.get("/contato", contatoController.paginaInicial);
module.exports = routes;
