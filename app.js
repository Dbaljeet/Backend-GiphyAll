const express = require('express')
const cors = require('cors')

const app = express()

const whitelist = [process.env.PAGE]

app.use(cors({ origin: whitelist }))

app.use(express.json())

app.use('/api', require('./routes'))

module.exports = app
