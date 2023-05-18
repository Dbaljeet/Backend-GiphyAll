const { handleError } = require('../utils/handleError')

const getCookie = (req, res, next) => {
  try {
    console.log(req.cookies, 'cookie')
    next()
  } catch (err) {
    handleError(res, 'Error cookies', 401)
  }
}
module.exports = { getCookie }
