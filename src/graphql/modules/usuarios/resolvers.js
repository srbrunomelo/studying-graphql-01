const database = require("../../../database");
const { usuarios, perfis } = require("../../../database");
const { geradorDeId } = require("../../../utils");

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
  Mutation: {
    criarUsuario(_, { data }) {
      const { nome } = data;
      const usuarioExistente = usuarios.some(
        (usuario) => usuario.nome === nome
      );
      if (usuarioExistente) {
        throw new Error("Usuário existente");
      }
      const novoUsuario = {
        ...data,
        id: geradorDeId(),
        perfil: 2,
        ativo: true,
      };
      usuarios.push(novoUsuario);
      return novoUsuario;
    },
    atualizarUsuario(_, { id, data }) {
      const usuario = usuarios.find((usuario) => usuario.id === id);
      const indice = usuarios.findIndex((usuario) => usuario.id === id);
      const novoUsuario = { ...usuario, ...data };
      usuarios.splice(indice, 1, novoUsuario);

      return novoUsuario;
    },
    deletarUsuario(_, { id }) {
      const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id);

      database.usuarios = database.usuarios.filter(
        (usuario) => usuario.id !== id
      );

      return !!usuarioEncontrado;
    },
  },
};
