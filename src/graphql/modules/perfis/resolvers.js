const { perfis } = require("../../../database");

module.exports = {
  Query: {
    perfis() {
      return perfis;
    },

    perfil(_, args) {
      return perfis.find((perfil) => perfil.id === args.id);
    },
  },
};
