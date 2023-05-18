const express = require('express')
const router = express.Router()
const { registerUser, getUser, deleteUser } = require('../controllers/user')
const {
  validatorRegisterUser,
  validatorDeleteUser,
} = require('../validators/user')
const { getCookie } = require('../middleware/getCookie')

router.post('/register', validatorRegisterUser, getCookie, registerUser)
router.post('/get', getUser)
router.post('/deleteAccount', validatorDeleteUser, deleteUser)

module.exports = router
