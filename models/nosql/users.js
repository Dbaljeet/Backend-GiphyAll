const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: ['user', 'admin'],
      message: `Rol no válido: {VALUE}`,
      default: 'user',
      required: true,
    },
    gifs: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('user', UserScheme)
