exports.paginaInicial = (req, res) => {
  res.render("index");
  console.log("Respondendo ao cliente");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
