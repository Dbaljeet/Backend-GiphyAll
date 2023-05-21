const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getUser,
  deleteUser,
} = require('../controllers/user')

const {
  validatorRegisterUser,
  validatorDeleteUser,
  validatorloginUser,
} = require('../validators/user')

const { checkSession } = require('../middleware/checkSession')
const { checkRol } = require('../middleware/checkRol')

router.post('/register', validatorRegisterUser, registerUser)

router.post('/login', validatorloginUser, loginUser)

router.post('/get', checkSession, getUser)

router.post(
  '/deleteAccount',
  validatorDeleteUser,
  checkSession,
  checkRol(['admin']),
  deleteUser
)

module.exports = router
