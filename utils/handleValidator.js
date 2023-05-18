const { validationResult } = require('express-validator')
const { handleError } = require('./handleError')

const ValidateResults = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    let aux = []
    err.errors.map((error) => {
      if (!aux.includes(error.path)) aux.push(error.path)
    })
    handleError(res, `Error bad request - ${aux}`, 400)
  }
}
module.exports = { ValidateResults }
