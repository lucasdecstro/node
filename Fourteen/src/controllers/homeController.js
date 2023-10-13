// const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   titulo: "Sei lá",
//   descricao: "Test",
// })
//   .then((dados) => {
//     console.log(dados);
//   })
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
  console.log("Respondendo ao cliente");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
