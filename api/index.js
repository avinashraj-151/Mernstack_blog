const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use( /* middle ware */bodyParser.json())
const PersonRouter = require('./Router/use.router')
app.use('/user', PersonRouter)
const auth_singup = require('./Router/auth.router')

app.use('/signup', auth_singup)
mongoose.connect(
  process.env.MONGO
).then(() => {
  console.log('connected to mongodb')
}).catch(err => console.log(err))

app.listen(port, () => {
  console.log('server is running on port ' + port + '!!!')
})
