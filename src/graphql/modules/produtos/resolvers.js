const { produtos, usuarios } = require("../../../database");

module.exports = {
  Produto: {
    criador(produto) {
      return usuarios.find((usuario) => usuario.id === produto.criador);
    },
  },
  Query: {
    produtos() {
      return produtos;
    },
  },
};
