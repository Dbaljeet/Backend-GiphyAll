require('dotenv').config()

const express = require('express')
const cors = require('cors')

const dbConnect = require('./config/mongo')

const app = express()

const whitelist = [process.env.PAGE]

app.use(cors({ origin: whitelist }))

app.use(express.json())

const port = process.env.PORT || 3000

app.use('/api', require('./routes'))

app.listen(port, () => {
  console.log('Ready on: ' + port)
  console.log(`http://localhost:${port}/`)
})

dbConnect()
