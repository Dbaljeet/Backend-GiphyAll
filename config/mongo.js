const mongoose = require('mongoose')

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI
  try {
    await mongoose.connect(DB_URI)
  } catch (err) {
    console.log('error db connection')
  }
}

const dbDisconnect = async () => {
  try {
    await mongoose.disconnect()
  } catch (err) {
    console.log('error disconnect db')
  }
}

module.exports = { dbConnect, dbDisconnect }
