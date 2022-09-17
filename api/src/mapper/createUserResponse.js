function createUserResponse(user) {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    dataNascimento: user.data_nascimento,
    urlImagem: user.url_imagem,
  }
}

module.exports = createUserResponse