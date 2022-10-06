const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const { INTERNAL_SERVER_ERROR } = require('./src/constants/http-status')
require('express-async-errors')

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((error, req, res, next) => {
  console.error(error)
  return res
    .status(INTERNAL_SERVER_ERROR)
    .send('Error interno, tente novamente mais tarde!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server on! :${process.env.PORT}`)
})
