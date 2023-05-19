const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
/**
 * @param {*} user
 */
const tokenSign = async (user) => {
  const sign = await jwt.sign({ _id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: '4h',
  })
  return sign
}

/**
 * @param {*} token
 */
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    return false
  }
}

module.exports = { tokenSign, verifyToken }
