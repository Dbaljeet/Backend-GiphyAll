const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const { usersModel } = require('../models')
const { handleError } = require('../utils/handleError')

const checkRol = (rol) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop()

    if (!token) handleError(res, 'error: please retry login', 401)

    let user_id = ''

    await jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err | !decoded._id) handleError(res, 'error: retry login', 401)
      user_id = decoded._id
    })

    const data = await usersModel.findById(user_id)

    const rolesByUser = data.role

    const check = rol.some((aux) => rolesByUser.includes(aux))

    if (!check) handleError(res, 'Error unauthorized', 401)

    next()
  } catch (err) {
    console.log(err)
    handleError(res, 'Error rol unauthorized', 400)
  }
}

module.exports = { checkRol }
