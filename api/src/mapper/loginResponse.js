function loginResponse(user, token) {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    dataNascimento: user.data_nascimento,
    urlImagem: user.url_imagem,
    token: token,
  }
}

module.exports = loginResponse
