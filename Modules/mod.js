// const nome = "Lucas";
// const sobrenome = "Castro";

// const falaNome = () => {
//   return nome + " " + sobrenome;
// };

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "Opa";

// console.log(exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = "Lucas";
const sobrenome = "Castro";

// exports.Pessoa = Pessoa;

module.exports = {
  nome,
  sobrenome,
  Pessoa,
};

exports.seiLa = "Sei lá!";
