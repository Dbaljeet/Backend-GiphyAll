const express = require('express')
const router = express.Router()
const { getGifs } = require('../controllers/gifs')

router.get('/', getGifs)

module.exports = router
