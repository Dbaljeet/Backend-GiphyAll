const { check } = require('express-validator')
const { ValidateResults } = require('../utils/handleValidator')

const validatorRegisterUser = [
  check('name').exists().notEmpty().isLength({ min: 2 }),
  check('email').exists().notEmpty().isLength({ min: 10 }).isEmail(),
  check('password').exists().notEmpty().isLength({ min: 10 }),
  check('role').optional(),
  (req, res, next) => {
    return ValidateResults(req, res, next)
  },
]

const validatorloginUser = [
  check('email').exists().notEmpty().isLength({ min: 10 }).isEmail(),
  check('password').exists().notEmpty().isLength({ min: 10 }),
  (req, res, next) => {
    return ValidateResults(req, res, next)
  },
]

const validatorDeleteUser = [
  check('email').exists().notEmpty().isLength({ min: 10 }).isEmail(),
  check('_id').exists().notEmpty(),
  (req, res, next) => {
    return ValidateResults(req, res, next)
  },
]
//ismongoid
module.exports = {
  validatorRegisterUser,
  validatorDeleteUser,
  validatorloginUser,
}
