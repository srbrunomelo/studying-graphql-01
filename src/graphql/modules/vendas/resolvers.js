const { vendas, usuarios, produtos } = require("../../../database");

module.exports = {
  Venda: {
    vendedor(venda) {
      return usuarios.find((usuario) => usuario.id === venda.vendedor);
    },
    comprador(venda) {
      return usuarios.find((usuario) => usuario.id === venda.comprador);
    },
    produto(venda) {
      return produtos.find((produto) => produto.id === venda.produto);
    },
  },
  Query: {
    vendas() {
      return vendas;
    },
  },
};
