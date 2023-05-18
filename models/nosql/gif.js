/*
const mongoose = require('mongoose')

const GifScheme = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      default: 'Sin título',
    },
    url: {
      type: String,
      validate: {
        validator: (req) => {
          return req ?? false
        },
        message: 'Error URL',
      },
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Gif', GifScheme)
*/
