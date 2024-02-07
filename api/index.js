const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect(
  process.env.MONGO
).then(() => {
  console.log('connected to mongodb')
}).catch(err => console.log(err))
app.listen(port, () => {
  console.log('server is running on port ' + port + '!!!')
})
