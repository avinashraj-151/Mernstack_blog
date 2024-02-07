const express = require('express')
const singup = require('../Controller/auth.signup')
const router = express.Router()
// const person = require('../Modal/user.modal')
router.post('/', singup)

module.exports = router
