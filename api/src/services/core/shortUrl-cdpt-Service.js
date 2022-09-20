const axios = require('axios')

async function shortUrl(url) {
  const response = await axios.get(`https://cdpt.in/shorten?url=${url}`)
  return response.data
}

module.exports = shortUrl
