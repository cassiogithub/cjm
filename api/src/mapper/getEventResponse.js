function getEventResponse(event, user) {
  return {
    id: event.id,
    nome: event.nome,
    local: event.local,
    dataEvento: event.data_evento,
    linkConvite: event.link_convite,
    hashEvento: event.hash_evento,
    usuario: {
      id: user.id,
      nome: user.nome,
      urlImagem: user.url_imagem,
    },
  }
}

module.exports = getEventResponse
