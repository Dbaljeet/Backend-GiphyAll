const bcryptjs = require('bcryptjs')

/**
 * password without encrypt
 *@param {*} passwordPlain
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10)
  return hash
}

/**
 * password without encrypt & password encrypt
 *@param {*} passwordPlain
 *@param {*} hashPassword
 */
const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }
