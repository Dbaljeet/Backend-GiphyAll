const { handleError } = require('../utils/handleError')
const { verifyToken } = require('../utils/handleJwt')
const checkSession = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleError(res, 'Error session - login', 401)
      return
    }

    const token = req.headers.authorization.split(' ').pop()
    const dataToken = await verifyToken(token)

    if (!dataToken) {
      handleError(res, 'Error session', 401)
      return
    }

    next()
  } catch (err) {
    handleError(res, 'Error session', 401)
  }
}

module.exports = { checkSession }
