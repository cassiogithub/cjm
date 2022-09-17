const bcrypt = require("bcrypt");
const prismaClient = require("../database/prismaClient");

async function createUser(request, response) {
  const { nome, email, dataNascimento, senha, urlImagem } = request.body;
  const saltRounds = 10;

  const userData = {
    nome,
    email,
    data_nascimento: new Date(dataNascimento),
    senha,
    url_imagem: urlImagem,
  };

  
  bcrypt.hash(senha, saltRounds, (err, hash) => {

  });

  console.log(passwordEncoded);
  try {
    const user = await prismaClient.usuario.create({
      data: userData,
    });
    return response.status(201).send(user);
  } catch (e) {
    console.log(e);
    return response.status(500).send("erro interno");
  }
}

module.exports = createUser;
