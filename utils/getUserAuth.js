const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const { usersModel } = require('../models')
const { handleError } = require('./handleError')

const getUserAuth = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ').pop()

    if (!token) handleError(res, 'error: please retry login', 401)

    let user_id = ''

    await jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err | !decoded._id) handleError(res, 'error: retry login', 401)
      user_id = decoded._id
    })

    const data = await usersModel.findById(user_id)

    if (!data) handleError(res, 'Error unauthorized', 401)

    const { _id, name, email, role, gifs } = data

    return { _id, name, email, role, gifs }
  } catch (err) {
    handleError(res, 'Error rol unauthorized', 400)
  }
}

module.exports = { getUserAuth }
