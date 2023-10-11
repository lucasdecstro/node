const express = require("express");
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET    PUT   DELETE

// http://meusite.com/ <- GET -> Entregue a página

app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
  `);
});

app.post("/", (req, res) => {
  res.send("Recebi o form");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado meu caro.");
});

app.listen(3000, () => {
  console.log("Rodaaaando");
});
