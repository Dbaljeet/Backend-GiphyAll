const { matchedData } = require('express-validator')
const { usersModel } = require('../models')
const { handleError } = require('../utils/handleError')

const registerUser = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await usersModel.create(body)
    const { name, email, role } = data
    res.send({ message: 'ok', name, email, role })
  } catch (err) {
    handleError(res, err, 400)
  }
}

const getUser = (req, res) => {
  try {
    const { body } = req
    console.log(body)
    const user = body.id
    const data = usersModel.findById({ user })
    res.send({ data })
  } catch (err) {
    handleError(res, err, 400)
  }
}

const deleteUser = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await usersModel.deleteOne({ _id: body._id })
    res.send({ message: 'ok', data })
  } catch (err) {
    handleError(res, 'Error delete user', 400)
  }
}

module.exports = { registerUser, getUser, deleteUser }
