const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname

const removeExtension = (filename) => filename.split('.')[0]

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file)
  if (name === 'index') return
  router.use(`/${name}`, require(`./${file}`))
})

module.exports = router
