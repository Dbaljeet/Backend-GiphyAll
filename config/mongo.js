const mongoose = require('mongoose')

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI
  try {
    const res = await mongoose.connect(DB_URI)
    console.log(res.Connection)
  } catch (err) {
    console.log('error')
  }
}

module.exports = dbConnect
