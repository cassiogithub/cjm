const prismaClient = require("../database/prismaClient");

async function listUser() {
  try {
    const user = await prismaClient.usuario.create({
      data: {
        nome: "gabriel henz",
        email: "gabriel2@teste.com",
        data_nascimento: new Date("1996-03-03"),
        senha:
          "489cd5dbc708c7e541de4d7cd91ce6d0f1613573b7fc5b40d3942ccb9555cf35",
        url_imagem: "https://avatars.githubusercontent.com/u/17843839?v=4",
      },
    });
    return response.json(user);
  } catch (e) {
    console.log(e);
  }
}

module.exports = listUser;
