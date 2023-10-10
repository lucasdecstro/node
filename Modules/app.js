// const mod = require("./mod.js");
// const falaNome = mod.falaNome;

// const { nome, sobrenome, falaNome } = require("./mod");

// console.log(nome, sobrenome);
// console.log(falaNome());

// const path = require("path");
const axios = require("axios");
// const { Pessoa } = require("./mod.js");
// const mod = require("./mod.js");

// const p1 = new Pessoa("Lucas");
// console.log(p1);

axios
  .get("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((response) => console.log(response.data))
  .catch((e) => console.log(e));

// const p = new Pessoa("João");

// console.log(mod);
// console.log(p);
