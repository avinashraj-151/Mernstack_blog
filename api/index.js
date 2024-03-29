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

app.use('/api/auth', auth_singup)
mongoose.connect(
  // process.env.MONGO
  'mongodb+srv://avinashraj:avinashrajj@mernblog.jc9gol0.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
  console.log('connected to mongodb')
}).catch(err => console.log(err))

app.listen(port, () => {
  console.log('server is running on port ' + port + '!!!')
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  res.status(statusCode).json({
    success: false,
    statusCode,
  message})
})
