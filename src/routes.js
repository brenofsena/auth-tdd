const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Breno",
  email: "breno@brenosena.com.br",
  password_hash: "19951321312389"
});

module.exports = routes;
