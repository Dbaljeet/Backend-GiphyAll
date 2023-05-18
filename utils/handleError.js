const handleError = (res, msg = 'Error', status = 403) => {
  res.status(status)
  res.send({ error: msg })
}
module.exports = { handleError }
