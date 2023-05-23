const { matchedData } = require('express-validator')
const { usersModel } = require('../models')
const { handleError } = require('../utils/handleError')
const { compare, encrypt } = require('../utils/handlePassword')

const { tokenSign } = require('../utils/handleJwt')

const { getUserAuth } = require('../utils/getUserAuth')

const registerUser = async (req, res) => {
  try {
    const bodyReq = matchedData(req)
    const password = await encrypt(bodyReq.password)
    const body = { ...bodyReq, password }
    const data = await usersModel.create(body)
    const { name, email, role, gifs, _id } = data

    const token = await tokenSign(_id, role)

    res.send({ message: 'ok', name, email, role, gifs, token })
  } catch (err) {
    handleError(res, err, 406)
  }
}

const loginUser = async (req, res) => {
  try {
    const body = matchedData(req)
    const { email, password } = body

    const data = await usersModel
      .findOne({ email })
      .select('password')
      .select('gifs')

    if (!data) handleError(res, 'Error, user not exist', 400)

    const auth = await compare(password, data.password)
    data.set('password', undefined, { strict: false })

    if (!auth) handleError(res, 'Error, unauthorized', 401)

    const token = await tokenSign(data)
    if (!token) handleError(res, 'Error, token', 401)
    res.send({ message: 'Login successful', data, token })
  } catch (err) {
    handleError(res, err, 400)
  }
}

const getUser = async (req, res, n) => {
  try {
    const data = await getUserAuth(req, res)
    if (!data) handleError(res, 'Error, user not exist', 400)
    /*const { body } = req
    const { name, email, gifs } = body*/
    res.send(data)
  } catch (err) {
    handleError(res, err, 400)
  }
}

const deleteUser = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await usersModel.deleteOne({ email: body.email })
    res.send({ message: 'ok', data })
  } catch (err) {
    handleError(res, 'Error delete user', 400)
  }
}

module.exports = { registerUser, loginUser, getUser, deleteUser }
