const express = require('express')
const { checkSession } = require('../middleware/checkSession')
const router = express.Router()
const { getGifs, refreshGifs } = require('../controllers/gifs')

router.get('/', getGifs)

router.post('/refresh', checkSession, refreshGifs)

module.exports = router
