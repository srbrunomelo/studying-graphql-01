const { usuarios, perfis } = require("../../../database");

module.exports = {
  Usuario: {
    perfil(usuario) {
      return perfis.find((perfil) => perfil.id === usuario.perfil);
    },
  },
  Query: {
    usuario(_, args) {
      return usuarios.find((usuario) => usuario.id === args.id);
    },
    usuarios() {
      return usuarios;
    },
  },
};
