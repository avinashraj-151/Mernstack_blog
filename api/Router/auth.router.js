const express = require('express')
const singup = require('../Controller/auth.signup')
const singin = require('../Controller/auth.signin')
const router = express.Router()
// const person = require('../Modal/user.modal')
router.post('/signup', singup)
router.post('/signin', singin)
module.exports = router
