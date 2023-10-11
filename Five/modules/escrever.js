const fs = require("fs").promises;

const { stringify } = require("querystring");

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" });
};
