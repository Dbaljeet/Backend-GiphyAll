const handleError = (res, msg = 'Error', status = 403) => {
  res.status(status)
  res.send({ status, error: msg })
  return
}
module.exports = { handleError }
