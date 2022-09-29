function listEventPageableResponse(events, totalPages) {
  return {
    content: [...events],
    totalPages: totalPages,
  }
}

module.exports = listEventPageableResponse
