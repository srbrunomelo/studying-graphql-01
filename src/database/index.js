module.exports = {
  vendas: [
    {
      id: 1,
      vendedor: 1,
      comprador: 2,
      produto: 2,
    },
  ],
  produtos: [
    {
      id: 1,
      descricao: "Notebook",
      criador: 1,
    },
    {
      id: 2,
      descricao: "Carro",
      criador: 1,
    },
  ],
  perfis: [
    {
      id: 1,
      descricao: "ADMIN",
    },
    {
      id: 2,
      descricao: "USUARIO",
    },
  ],
  usuarios: [
    {
      id: 1,
      nome: "Bruno",
      salario: 1000.01,
      idade: 34,
      ativo: true,
      perfil: 1,
    },
    {
      id: 2,
      nome: "Marcos",
      salario: 1300.01,
      idade: 40,
      ativo: false,
      perfil: 2,
    },
  ],
};
