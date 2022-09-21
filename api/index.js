const express = require('express')
const routes = require('./src/routes/userRoutes')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => {
  console.log('Server on! :8080')
})
