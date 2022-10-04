function editarEventoResponse(hash_evento, nome, local, data_evento) {
  return {
    hashEvento: hash_evento,
    nome: nome,
    local: local,
    dataEvento: data_evento,
  }
}

module.exports = editarEventoResponse
