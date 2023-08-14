require('dotenv').config()
const app = require('./app')

const port = process.env.PORT || 3000

const { dbConnect } = require('./config/mongo')

app.listen(port, () => {
  console.log('Ready on: ' + port)
  console.log(`http://localhost:${port}/`)
})

dbConnect()
